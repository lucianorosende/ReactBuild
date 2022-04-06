import Counter from "./itemCount"
import ItemList from "./itemList"
import {useState, useEffect} from "react"
import {productFetch} from "./asyncmock"

const Items = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        productFetch().then(p => {
            
            setProducts(p);

        })

    }, [])

    const addHandler = (quant) => {

        if(quant === 0){
          console.log(`no es posible agregar ${quant} items al carrito`)
        }
        else{console.log(`se agregaron ${quant} items al carrito`)} 
        
        
      }

    return (
    <>
        <ItemList products={products}/>
        <Counter initial={0} stock={5} onAdd={addHandler}/>        
    </>            
    )

}

export default Items;