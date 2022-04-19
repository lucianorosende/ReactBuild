import lottie from "lottie-web"
import Err404 from "./../static/404.json"
import { useEffect } from "react";

const Error404 = () => {

    useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#error-logo"),
          animationData: Err404,
        });
      }, []);

    return(
    
                <div id="error-logo"/>
    
    
    )

}

export default Error404