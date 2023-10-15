import { useEffect, useState } from "react"
import { getCachedResponse, setCacheResponse } from "../services/cache"
import { dateDiffInDays } from "../utils/shouldUpdatePodcasts"

const useFetch = (url: string, init, id?: string) => {
    const cachedResponse = id ? getCachedResponse(id) : null
    const shouldMakeFetchCall = !cachedResponse || dateDiffInDays(new Date(), cachedResponse?.lastUpdated) > 1;
    const [loading, setLoading] = useState(shouldMakeFetchCall)
    const [data, setData] = useState<object | null>(cachedResponse?.response || null)
    const [error, setError] = useState(null)

    useEffect(()=> {
        if (shouldMakeFetchCall){
            fetch(url, init).then(
                (response => response.json()))
                .then((resData => {
                    if (id)
                        setCacheResponse(id, resData);
                    setData(resData)
                    setLoading(false)
                }))
            .catch((resError => {
                setError(resError)
                setLoading(false)
            }))
        }
    }, [shouldMakeFetchCall])

    return {
        loading,
        data,
        error
    }
}

export default useFetch