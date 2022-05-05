import { useContext } from "react"
import CartContext from "./../context/CartContext"
import CartAnimation from "./../services/animations/cartAnimation"
import {writeBatch, collection, query, getDocs, where, documentId, addDoc} from "firebase/firestore"
import { fireStoreDB } from "../services/firebase/index"
import { useState } from "react"
import LoadingAnimation from "../services/animations/loader"

const Cart = () => {

    const [load, setLoad] = useState(false);
    const { cart, removeFromCart, getPrice, cartClear } = useContext(CartContext)

    const createOrder = () => {
        setLoad(true)
        const orderCreate = {
            items: cart,
            buyer: {

                name: "Luciano Rosende",
                phone: "+541144971105",
                email: "lucianorosende@gmail.com"

            },
            total: getPrice(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(fireStoreDB)

        const collectionRef = collection(fireStoreDB, 'productos')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), "in", ids)))
            .then(res => {
                res.docs.forEach(doc => {

                    const docData = doc.data()
                    const productQuant = cart.find(p => p.id === doc.id)?.quantity

                    if(docData.stock >= productQuant){

                        batch.update(doc.ref, {stock: docData.stock - productQuant})
                    } 
                    else{

                        outOfStock.push({id: doc.id, ...docData})
                    }

                })


            }).then(() => {

                if(outOfStock.length === 0){
                    
                    const collectRef = collection(fireStoreDB, "orders")
                    return addDoc(collectRef, orderCreate)
                } else {
                    return Promise.reject({name: 'outOfStockError', products: outOfStock})
                }

            }).then(({id}) => {

                batch.commit()
                console.log(`id order is : ${id}`)
            }).catch(e => {
                console.log(e)
            }).finally(() => {
                setLoad(false)
            })


    }

    if(load) {
        return <LoadingAnimation></LoadingAnimation>
    }

    if(cart.length === 0) {
        return (
            <CartAnimation></CartAnimation>
        )
    }

    return (
        <>
        <h1>Cart</h1>
        <ul>
            {
                cart.map(prod => <li key={prod.id}>{prod.name}  cantidad: {prod.quantity} precio uni: {prod.price}  subtotal: {prod.quantity * prod.price} <button onClick={() => removeFromCart(prod.id)}>X</button></li>)
            }  
            <h5>total:{getPrice()}</h5>
            <button onClick={() => cartClear()}>Limpiar Carrito</button>
            <button onClick={() => createOrder()}>Generar Orden</button> 
        </ul>
        </>
    )
}

export default Cart