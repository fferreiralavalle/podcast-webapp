import { useMemo } from "react"
import { getPodcastEpisodeUrl, formatPodcastEpisodes } from "../services/itunes"
import useFetch from "./useFetch"

const usePodcastEpisodes = (id) => {
    const { data, loading, error } = useFetch(getPodcastEpisodeUrl(id), null)

    const formattedData = useMemo(() => formatPodcastEpisodes(data?.results), [data])

    return {
        loading,
        data: formattedData,
        error
    }
}

export default usePodcastEpisodes