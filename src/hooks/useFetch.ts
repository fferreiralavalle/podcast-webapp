import { useEffect, useState } from "react"

const useFetch = (url: string, init, stop = false) => {
    const [loading, setLoading] = useState(!stop)
    const [data, setData] = useState<object | null>(null)
    const [error, setError] = useState(null)

    useEffect(()=> {
        if (!stop){
            fetch(url, init).then(
                (response => response.json()))
                .then((resData => {
                    setData(resData)
                    setLoading(false)
                }))
            .catch((resError => {
                setError(resError)
                setLoading(false)
            }))
        }
    }, [stop])

    return {
        loading,
        data,
        error
    }
}

export default useFetch