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

        return(() => {

            setpDetail()
        })

    }, [productId])

    return (
    
        <div className="d-flex justify-content-center m-6">
        {loading ? <button type="button" class="btn btn-outline-dark justify-content-center btn-lg">Cargando...</button> : pDetail ? <ItemDetail {...pDetail}/> : <button type="button" class="btn btn-outline-dark">El producto no existe!</button>}
                
        </div>   
     
    )

}

export default ItemDetailContainer;