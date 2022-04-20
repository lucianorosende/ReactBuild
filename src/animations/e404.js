import lottie from "lottie-web"
import Err404 from "../static/404.json"
import { useEffect } from "react";

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
      <div className="d-flex justify-content-center"><button type="button" className="btn btn-outline-dark btn-lg m-6">Elemento no encontrado!</button></div>
      </>
    
    )

}

export default Error404