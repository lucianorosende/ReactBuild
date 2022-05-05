import { fireStoreDB } from "./index"
import { getDocs, where, query, collection } from "firebase/firestore"
import { createProductAdaptFromFS } from "./../../adapters/ProductAdaptation"

export const productFetchByCategory = (categoryId) => {

    return new Promise((resolve, reject) => {

        const collectRef = categoryId ?
                            query(collection(fireStoreDB, "productos"), where( "category", "==", categoryId)) :
                            collection(fireStoreDB, "productos")

        getDocs(collectRef).then(r => {

            const products = r.docs.map(doc => {

                return createProductAdaptFromFS(doc)

            })
            resolve(products)
        })
        .catch(e => {
            reject(e)
        })
        
    })

}