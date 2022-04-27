import {useParams} from "react-router-dom"
import ItemList from "./itemList"
import {useState, useEffect} from "react"
import {productFetchByCategory} from "./asyncmock"
import { getDocs, collection, query, where } from "firebase/firestore"
import { fireStoreDB } from "../services/firebase"


const Items = () => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams();

    useEffect(() => {

        // productFetchByCategory(categoryId).then(p => {
            
        //     setProducts(p);

        // })

        const collectRef = categoryId ?
                            query(collection(fireStoreDB, "productos"), where( "category", "==", categoryId)) :
                            collection(fireStoreDB, "productos")

        getDocs(collectRef).then(r => {

            const products = r.docs.map(doc => {

                return {id: doc.id, ...doc.data()}

            })
            setProducts(products)
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