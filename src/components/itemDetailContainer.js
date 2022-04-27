import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import {productFetchById} from "./asyncmock"
import {useParams} from "react-router-dom"
import LoadingAnimation from "../services/animations/loader"
import Error404 from "../services/animations/e404"
import { fireStoreDB } from "../services/firebase"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [pDetail, setpDetail] = useState()
    const [loading, setLoad] = useState(true)

    const { productId } = useParams()

    useEffect(() => {

        getDoc(doc(fireStoreDB, "productos", productId)).then(p => {
            
            const pID = {id: p.id, ...p.data()}

            setpDetail(pID);
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoad(false);
        })
        
            // return(() => {

            //     setpDetail()
            // })

    }, [productId])

    

    return (
    <>
        
             
            {
                loading ? <LoadingAnimation></LoadingAnimation>
                     :
                pDetail ?
                    <ItemDetail {...pDetail}/> : <Error404></Error404>
            }
            
            
          
            </>
    )

}

export default ItemDetailContainer;