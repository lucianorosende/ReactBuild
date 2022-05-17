import CartContext from "../context/CartContext"
import {useContext} from "react"
import {Link} from "react-router-dom"

let CartWidget = () => {

    const {getQuant} = useContext(CartContext)

    return(

        <div>
            <Link className="btn btn-outline-dark" to="/cart">
                <i className="bi-cart-fill me-1"></i>
                
                {
                    getQuant()? <> 
                                <span className="active text-dark text-decoration-none">Carrito</span> 
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{getQuant()}</span> 
                                </> :
                                <span className="active text-dark text-decoration-none">No hay productos!</span> 
                }
                
            </Link>
        </div>

    )

}

export default CartWidget;