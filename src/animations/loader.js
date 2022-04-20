import lottie from "lottie-web"
import Loading from "../static/loading.json"
import { useEffect } from "react";

const LoadingAnimation = () => {

    useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#loading"),
          animationData: Loading,
        });
      }, []);

    return(
       <>
        
        <div className="resetLoad" id="loading"></div>
        <div className="d-flex justify-content-center"><button type="button" className="btn btn-outline-dark justify-content-center btn-lg m-6">Cargando...</button></div>
        </> 
    
    )

}

export default LoadingAnimation