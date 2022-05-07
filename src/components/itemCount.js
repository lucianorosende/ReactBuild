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

    if(stock === 0){
        return(
            
            <button className="btn btn-danger flex-shrink-0" type="button">
                <i class="bi bi-exclamation-triangle me-2"></i>
                No hay Stock!
            </button>
            
            
            
        )
    }

    return(
        <>
        <button className="btn btn-outline-dark me-2" onClick={decrement}>-</button>
        <span className="form-control text-center maxW me-2">{counter}</span>
        <button className="btn btn-outline-dark me-2 " onClick={increment}>+</button>
                            <button className="btn btn-outline-primary flex-shrink-0" type="button" onClick={() => onAdd(counter)}>
                                <i className="bi-cart-fill me-1"></i>
                                Añadir a Carrito
                            </button>
        </>
        
        
    )

}

export default Counter