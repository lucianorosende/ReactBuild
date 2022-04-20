import Counter from "./itemCount"
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartSuccess from "./CartSuccess";
import CartContext from "../context/CartContext";

const ItemDetail = ({imgUrl, descriptionLarge, title, price, id}) => {

    const [quantity, setQuantity] = useState(0);
    const {addItem, isInCart} = useContext(CartContext)

    const addHandler = (quant) => {

        const prodObj = {
            id, title, price, quantity: quant
        }
        setQuantity(quant)
        addItem(prodObj)
        
      }

    return(
        <div className="py-5 woodImg">
        
            
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={imgUrl} alt={title}/></div>
                        <div className="col-md-6">
                            <h1 className="display-5 fw-bolder">{title}</h1>
                            <div className="fs-5 mb-5">
                                <span className="text-decoration-line-through">${parseInt(price * 1.2)}ARS</span>
                                <span className="m-2">${price}ARS</span>
                            </div>
                            <p className="lead">{descriptionLarge}</p>
                            <div className="d-flex">
                            {isInCart(id) ? <Link to="/cart"><CartSuccess/></Link> : <Counter initial={0} stock={5} onAdd={addHandler}/>}
                            </div>
                        </div>
                    </div>
                </div>
            
        
        </div>
    )

}

export default ItemDetail;