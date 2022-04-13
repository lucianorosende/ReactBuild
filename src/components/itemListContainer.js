import {useParams} from "react-router-dom"
import ItemList from "./itemList"
import {useState, useEffect} from "react"
import {productFetchByCategory} from "./asyncmock"


const Items = () => {

    const [productsCategory, setProducts] = useState([])
    const { categoryId } = useParams();

    useEffect(() => {

        productFetchByCategory(categoryId).then(p => {
            
            setProducts(p);

        })

    }, [categoryId])

    console.log(categoryId)

    return (
    <>
        <section className="py-5 imgSect">
        <ItemList products={productsCategory}/>
        </section>         
    </>            
    )

}

export default Items;