import { useEffect, useState } from "react"

const useFetch = (url, init) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=> {
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
    }, [])

    return {
        loading,
        data,
        error
    }
}

export default useFetch