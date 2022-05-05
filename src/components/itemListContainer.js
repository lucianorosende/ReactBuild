import {useParams} from "react-router-dom"
import ItemList from "./itemList"
import {useState} from "react"
import { productFetchByCategory } from "../services/firebase/firestore"
import LoadingAnimation from "../services/animations/loader"
import { useAsyncHook } from "../hooks/asyncHook"

const Items = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();

    useAsyncHook(
        
        () => productFetchByCategory(categoryId),
        setProducts,
        () => console.log("error 404"),
        setLoading,
        [categoryId]
    )

    if(loading){

        return <LoadingAnimation></LoadingAnimation>
    }

    

    return (
    <>
            
            <ItemList products={products}/>
            

    </>            
    )

}

export default Items;