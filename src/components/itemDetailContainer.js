import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import {productFetchById} from "./asyncmock"
import {useParams} from "react-router-dom"
import LoadingAnimation from "../animations/loader"
import Error404 from "../animations/e404"

const ItemDetailContainer = () => {

    const [pDetail, setpDetail] = useState()
    const [loading, setLoad] = useState(true)

    const { productId } = useParams()

    useEffect(() => {

        productFetchById(productId).then(p => {
            
            setpDetail(p);
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