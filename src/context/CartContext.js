import { useState, createContext, useEffect } from "react"
import { collection, setDoc, doc, getDocs } from "firebase/firestore"
import { fireStoreDB } from "../services/firebase"

const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cartSaver, setCartSaver] = useState([])
    const [load, setLoad] = useState(false);

    
    const refCart = collection(fireStoreDB, "cart")
    
        if(cartSaver.length !== 0){
            setDoc(doc(refCart, "cart"), {
                cartSaver
                })
        }    
        
        useEffect(() => {
            
            setLoad(true)
            getDocs(refCart).then(r => {

            
                
                const data = r.docs.map(doc => {
                    return doc.data()
                })

                setCartSaver(data[0]?.cartSaver || []) 
                
            })
            .catch(e => console.log(e))
            .finally(() => {
                setLoad(false)
            })
        }, []) //eslint-disable-line
   
          

    

    

    const addItem = (productToAdd) => {
        setCartSaver([...cartSaver, productToAdd])
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

        const products = cartSaver.filter(prod => prod.id !== id)
        setCartSaver(products)
        setDoc(doc(refCart, "cart"), {
            products
        })
    }


    return(

        <CartContext.Provider value={{
            addItem,
            getQuant,
            isInCart,
            cartClear,
            removeFromCart,
            getPrice,
            cartSaver,
            load,
            setLoad,
            

        }}>
            {children}
        </CartContext.Provider>

    )

}

export default CartContext