import { useEffect } from "react"

export const useAsyncHook = (asyFn, setProducts, errFn, setLoading, depend = []) => {

    useEffect(() => {

        let active = true

        asyFn()
            .then(resolve => {
                if(active) setProducts(resolve)
        })
            .catch(err => {
                errFn && errFn(err)
        })
            .finally(() => {
                setTimeout(() => {
                    if(active) setLoading(false)
                  }, 200)
            })
        
        return () => {
            active = false
        }
            

    }, depend) //eslint-disable-line
            

}

