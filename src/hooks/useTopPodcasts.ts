import { useEffect } from "react"
import { TopPodcastItem, getTopPodcastUrl, formatPodcastsEntries } from "../services/itunes"
import shouldUpdatePodcasts from "../utils/shouldUpdatePodcasts"
import { getCachedPodcasts, setCachedPodcasts, setLastUpdatedPodcasts } from "../utils/getCachedPodcasts"
import useFetch from "./useFetch"

const useTopPodcasts = (amount = 100) => {
    const cachedPodcasts = getCachedPodcasts()
    const shouldUpdate = !cachedPodcasts || shouldUpdatePodcasts()
    const { data, error, loading } = useFetch(getTopPodcastUrl(amount), null, !shouldUpdate)

    useEffect(() => {
        if (data){
            const cachedPodcasts: Array<TopPodcastItem> = formatPodcastsEntries(data?.feed?.entry)
            const cacheObject = cachedPodcasts.reduce((acum, current) => {
                acum[current.id] = current;
                return acum
            }, {})
            setCachedPodcasts(cacheObject)
        }
    }, [data])

    return {
        loading,
        data: cachedPodcasts && Object.values(cachedPodcasts),
        error
    }
}

export default useTopPodcasts