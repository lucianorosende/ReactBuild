import CartContext from "../context/CartContext"
import {useContext, useState} from "react"
import {Link} from "react-router-dom"

let CartWidget = () => {

    const [quant, setQuant] = useState(0)
    const {getQuant} = useContext(CartContext)

    // setQuant(getQuant())
   
    if(!getQuant()){
        return null
    }


    return(

        <div>
                                <button className="btn btn-outline-dark">
                                    <i className="bi-cart-fill me-1"></i>
                                    <Link className="active text-dark text-decoration-none" to="/cart">Carrito</Link>
            
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">{getQuant()}</span>
                                </button>
        </div>

    )

}

export default CartWidget;