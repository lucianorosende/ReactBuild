import lottie from "lottie-web"
import cartAnimation from "./../LottieFiles/cart.json"
import { useEffect } from "react";
import {Link} from "react-router-dom"

const CartAnimation = () => {

    useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#cart-logo"),
          animationData: cartAnimation,
        });
      }, []);

    return(
    <>
      <div className="reset" id="cart-logo"></div>
      <div className="d-flex justify-content-center"><Link to="/" className="btn btn-outline-dark btn-lg m-6">Faltan items en el carrito!</Link></div>
      </>
    
    )

}

export default CartAnimation