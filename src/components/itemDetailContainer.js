import ItemDetail from "./ItemDetail"
import { useState, useEffect, useContext } from "react"
import {useParams} from "react-router-dom"
import LoadingAnimation from "../services/animations/loader"
import Error404 from "../services/animations/e404"
import { fireStoreDB } from "../services/firebase"
import { getDoc, doc } from "firebase/firestore"
import { createProductAdaptFromFS } from "../adapters/ProductAdaptation"
import CartContext from "../context/CartContext"

const ItemDetailContainer = () => {

    const [pDetail, setpDetail] = useState()
    // const [loading, setLoad] = useState(true)
    const {load, setLoad} = useContext(CartContext)

    const { productId } = useParams()

    useEffect(() => {
        setLoad(true)
        getDoc(doc(fireStoreDB, "productos", productId)).then(p => {
        
            setpDetail(createProductAdaptFromFS(p));
            
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoad(false)
        })
        
            // return(() => {

            //     setpDetail()
            // })

    }, [productId]) //eslint-disable-line

    

    return (
    <>
        
             
            {
                load ? <LoadingAnimation></LoadingAnimation>
                     :
                pDetail ?
                    <ItemDetail {...pDetail}/> : <Error404></Error404>
            }
            
            
          
            </>
    )

}

export default ItemDetailContainer;