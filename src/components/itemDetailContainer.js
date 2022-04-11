import ItemDetail from "./ItemDetail"
import { useState,useEffect } from "react"
import {productFetch} from "./asyncmock"

const ItemDetailContainer = () => {

    const [pDetail, setpDetail] = useState([])

    useEffect(() => {

        productFetch().then(p => {
            
            setpDetail(p[0]);
        })

    }, [])
    
    return (
    <>
        
        <ItemDetail details={pDetail}/>
                
    </>            
    )

}

export default ItemDetailContainer;