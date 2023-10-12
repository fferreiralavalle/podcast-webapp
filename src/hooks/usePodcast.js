import { useEffect, useState } from "react"
import { getPodcastUrl } from "../services/itunes"

const usePodcast = (id) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=> {
        fetch(getPodcastUrl(id)).then(
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

export default usePodcast