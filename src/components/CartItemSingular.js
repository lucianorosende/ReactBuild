import { useContext } from "react"
import CartContext from "../context/CartContext"

const CartItemSingular = ({id, price, quantity, title, totalPrice, imgUrl, description}) => {
    
    
    const {removeFromCart} = useContext(CartContext)

    return(
        
        <>
            <div className="product">
            <div className="product-image">
            <img src={imgUrl} alt={id}/>
            </div>
            <div className="product-details">
            <div className="product-title">{title}</div>
            <p className="product-description">{description}</p>
            </div>
            <div className="product-price">{price}</div>
            <div className="product-quantity">
            <span className="btn btn-outline-dark mx-2">{quantity}</span> 
            </div>
            <div className="product-removal">
            <button className="remove-product" onClick={() => removeFromCart(id)}>
                Remover
            </button>
            </div>
            <div className="product-line-price">{totalPrice}</div>
            </div>
        </>
        

    )
}

export default CartItemSingular