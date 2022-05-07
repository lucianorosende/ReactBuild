import CartContext from "../context/CartContext"
import {useContext} from "react"
import {Link} from "react-router-dom"

let CartWidget = () => {

    const {getQuant} = useContext(CartContext)

    // setQuant(getQuant())
   
    if(!getQuant()){
        return(

            <div>
                <button className="btn btn-outline-dark">
                    <i className="bi-cart-fill me-1"></i>
                    <Link className="active text-dark text-decoration-none" to="/cart">No hay productos!</Link>
                </button>
            </div>
    
        )
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