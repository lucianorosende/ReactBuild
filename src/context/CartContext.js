import { useState, createContext } from "react"

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const getQuant = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })

        return count
        

    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id )
    }

    const cartClear = () => {

        setCart([]);
    }

    const removeFromCart = (id) => {

        const products = cart.filter(prod => prod.id !== id)
        setCart(products)

    }

    return(

        <CartContext.Provider value={{
            cart,
            addItem,
            getQuant,
            isInCart,
            cartClear,
            removeFromCart

        }}>
            {children}
        </CartContext.Provider>

    )

}

export default CartContext