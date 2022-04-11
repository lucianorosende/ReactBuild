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

    return (
    <>
        <section className="py-5 imgSect">
        <ItemList products={products}/>
        {/* <Counter initial={0} stock={5} onAdd={addHandler}/> */}
        </section>         
    </>            
    )

}

export default Items;