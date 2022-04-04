import {useState} from "react"

const Counter = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial);
        
    const decrement = () => {

        if(counter > initial){
            setCounter(counter - 1);
        }
        else{
            console.log(`No es posible comprar ${initial} productos`)
        }
        

    }

    const increment = () => {

        if(counter < stock){
            setCounter(counter + 1);
        }
        else{
            console.log(`el Stock no puede superar ${stock} items`)
        }
    }

    return(
        
        <div className="d-flex justify-content-center">
        <button className="btn btn-outline-dark bg-white m-1" onClick={decrement}>-</button>
        <div className="btn btn-outline-bark bg-white m-1">{counter}</div>
        <button className="btn btn-outline-dark bg-white m-1" onClick={increment}>+</button>
        <button className="btn btn-outline-dark mt-auto bg-danger m-1" onClick={() => onAdd(counter)}>Add to Cart</button>
        </div>
    )

}

export default Counter