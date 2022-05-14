import { useContext } from "react"
import CartContext from "../context/CartContext"
import {writeBatch, collection, query, getDocs, where, documentId, addDoc} from "firebase/firestore"
import { fireStoreDB } from "../services/firebase/index"

const Checkout = () => {

    const {getPrice, cartSaver, setLoad } = useContext(CartContext)

    const createOrder = () => {
        setLoad(true)
        const orderCreate = {
            items: cartSaver,
            buyer: {

                name: "Luciano Rosende",
                phone: "+541144971105",
                email: "lucianorosende@gmail.com"

            },
            total: getPrice(),
            date: new Date()
        }

        const ids = cartSaver.map(prod => prod.id)

        const batch = writeBatch(fireStoreDB)

        const collectionRef = collection(fireStoreDB, 'productos')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), "in", ids)))
            .then(res => {
                res.docs.forEach(doc => {

                    const docData = doc.data()
                    const productQuant = cartSaver.find(p => p.id === doc.id)?.quantity

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
                console.log(id)
            }).catch(e => {
                console.log(e)
            }).finally(() => {
                setLoad(false)
            })


    }

    return (
        <button onClick={() => {createOrder()}}>Generar orden</button>
    )
}

export default Checkout