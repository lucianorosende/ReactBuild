import { useContext } from "react"
import CartContext from "./../context/CartContext"
import CartAnimation from "./../services/animations/cartAnimation"

const Cart = () => {

    const { cart, removeFromCart, price } = useContext(CartContext)

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
            <h5>total:{price}</h5> 
        </ul>
        </>
    )
}

export default Cart