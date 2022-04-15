import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import {productFetchById} from "./asyncmock"
import {useParams} from "react-router-dom"

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
                loading ?
                    <div className="d-flex justify-content-center"><button type="button" className="btn btn-outline-dark justify-content-center btn-lg m-6">Cargando...</button></div> :
                pDetail ?
                    <ItemDetail {...pDetail}/> : <div className="d-flex justify-content-center"><button type="button" className="btn btn-outline-dark m-6">El producto no existe!</button></div>
            }
            
            
          
            </>
    )

}

export default ItemDetailContainer;