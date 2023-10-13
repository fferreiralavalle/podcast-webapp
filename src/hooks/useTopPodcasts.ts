import { useMemo } from "react"
import { getTopPodcastUrl, formatPodcastsEntries } from "../services/itunes"
import useFetch from "./useFetch"

const useTopPodcasts = (amount = 100) => {
    const { data, error, loading } = useFetch(getTopPodcastUrl(amount), null, `top-podcasts-${amount}`)
    const formattedTopPodcast = useMemo(() => formatPodcastsEntries(data?.feed?.entry), [data])

    return {
        loading,
        data: formattedTopPodcast,
        error
    }
}

export default useTopPodcasts