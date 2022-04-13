import {useParams} from "react-router-dom"
import ItemList from "./itemList"
import {useState, useEffect} from "react"
import {productFetchByCategory} from "./asyncmock"


const Items = () => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams();

    useEffect(() => {

        productFetchByCategory(categoryId).then(p => {
            
            setProducts(p);

        })

    }, [categoryId])

    return (
    <>
        <section className="py-5 imgSect">
        <ItemList products={products}/>
        </section>         
    </>            
    )

}

export default Items;