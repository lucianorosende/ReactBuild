import { useContext } from "react"
import CartContext from "./../context/CartContext"
import CartAnimation from "./../services/animations/cartAnimation"
import LoadingAnimation from "../services/animations/loader"
import CartLabels from "./CartLabels"
import CartTotal from "./CartTotal"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"

const Cart = () => {
    
    const {cartClear, cartSaver, load } = useContext(CartContext)
    
    if(load) {
        return <LoadingAnimation></LoadingAnimation>
    }

    if(cartSaver.length === 0) {
        return (
            <CartAnimation></CartAnimation>
        )
    }
   
        return (
            <>

        <div className="shopping-cart">

            <CartLabels/>
            {cartSaver.map(p => <CartItem key={p.id} {...p}/>)}
            <CartTotal/>

  
      
      <Link className="checkout" to={"/checkout"}>Checkout</Link>
      <button className="checkout me-2" onClick={() => cartClear()}>Limpiar Carrito</button>

</div>




            
            {/* <h1>Cart</h1>
            <ul>
                {   
                    
                    cartSaver.map(prod => <li key={prod.id}>{prod.name}  cantidad: {prod.quantity} precio uni: {prod.price}  subtotal: {prod.quantity * prod.price} <button onClick={() => removeFromCart(prod.id)}>X</button></li>)
                }  
                <h5>total:{getPrice()}</h5>
                <button onClick={() => cartClear()}>Limpiar Carrito</button>
                <button onClick={() => createOrder()}>Generar Orden</button> 
            </ul> */}
            </>
        )
    }
    


export default Cart