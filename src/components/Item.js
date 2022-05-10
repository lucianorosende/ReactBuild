import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../context/CartContext"

const Item = ({id, title, description, price, imgUrl, stock}) => {

    const {addItem, isInCart} = useContext(CartContext)

    const handler = () => {

        const prodObj = {
            id, title, price, quantity: 1
        }
        addItem(prodObj)
        }   


    return (

        <div className="col mb-5">
            <div className="card h-100">
                
                <img className="card-img-top" src={imgUrl} alt={id} />
                
                <div className="card-body p-4">
                    <div className="text-center">
                        
                        <h5 className="fw-bolder">{title}</h5>
                        <h6>{description}</h6>
                        
                        ${price}
                        
                    </div>
                </div>
                
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><Link to={`/detail/${id}`} className="btn btn-outline-dark mt-auto m-2">Ver Detalles</Link></div>
                    <div className="text-center">

                    {
                        stock === 0 ? <button className="btn btn-danger mt-auto">No hay stock!</button> 
                                    : 
                        isInCart(id) ? <Link key={id} className="btn btn-success mt-auto" to={"/cart"}>Ir al Carrito</Link> 
                                    :
                                    <Link key={id} className="btn btn-success mt-auto" to={"/cart"} onClick={handler}><i className="bi-cart-fill me-1"></i>Añadir a Carrito</Link>
                    }
                    

                    </div>
                </div>
            </div>
        </div>                      
    )

}

export default Item