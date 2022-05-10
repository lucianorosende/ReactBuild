import { useState, createContext, useEffect } from "react"
import { collection, setDoc, doc, getDocs } from "firebase/firestore"
import { fireStoreDB } from "../services/firebase"

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cartSaver, setCartSaver] = useState([])
    

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const getQuant = () => {
        let count = 0
        cartSaver.forEach(prod => {
            count += prod.quantity
        })
        return count
        

    }
    
    const getPrice = () => {

    let total = 0
    cartSaver.forEach(prod => {
        total += prod.quantity * prod.price
    })  

    return total
        
    }



    const isInCart = (id) => {
        return cartSaver.some(prod => prod.id === id )
    }

    const cartClear = () => {
        setCartSaver([])
        setDoc(doc(refCart, "cart"), {})
    }

    const removeFromCart = (id) => {

        const products = cart.filter(prod => prod.id !== id)
        setCart(products)

    }

    const refCart = collection(fireStoreDB, "cart")

    if(cart.length !== 0){
        setDoc(doc(refCart, "cart"), {
            cart
            })
    }    
    
    useEffect(() => {
        
        // setLoad(true)
        getDocs(refCart).then(r => {

        
            
            const data = r.docs.map(doc => {
                return doc.data()
            })

            setCartSaver(data[0]?.cart || []) 
            
        })
        // .catch(e => console.log(e))
        // .finally(() => {
        //     // setLoad(false)
        // })
    }, [cart]) //eslint-disable-line
   
        

        




    return(

        <CartContext.Provider value={{
            cart,
            addItem,
            getQuant,
            isInCart,
            cartClear,
            removeFromCart,
            getPrice,
            cartSaver

        }}>
            {children}
        </CartContext.Provider>

    )

}

export default CartContext