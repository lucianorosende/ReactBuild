import lottie from "lottie-web"
import Err404 from "../LottieFiles/404.json"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Error404 = () => {

    useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#error-logo"),
          animationData: Err404,
        });
      }, []);

    return(
    <>
      <div className="reset" id="error-logo"></div>
      <div className="d-flex justify-content-center"><Link className="btn btn-outline-dark btn-lg m-6" to="/">Volver a inicio</Link></div>
      </>
    
    )

}

export default Error404