import { useContext } from "react"
import CartContext from "../context/CartContext"

const CartTotal = () => {

    const {getPrice, getPriceTax, getShipping} = useContext(CartContext)

    return(
        <>
            <div className="totals">
                <div className="totals-item">
                <label>Subtotal</label>
                <div className="totals-value" id="cart-subtotal">{getPrice()}</div>
                </div>
                <div className="totals-item">
                <label>Impuesto (21%)</label>
                <div className="totals-value" id="cart-tax">{getPriceTax()}</div>
                </div>
                <div className="totals-item">
                <label>Envio</label>
                <div className="totals-value" id="cart-shipping">{getShipping()}</div>
                </div>
                <div className="totals-item totals-item-total">
                <label>Gran Total</label>
                <div className="totals-value" id="cart-total">{getPriceTax() + getShipping()}</div>
                </div>
            </div>
        </>
    )
}

export default CartTotal