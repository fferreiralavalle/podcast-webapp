import { getPodcastEpisodeUrl } from "../services/itunes"

const usePodcastEpisodes = (id) => {
    const { data, loading, error } = useFetch(getPodcastEpisodeUrl(id), null)

    return {
        loading,
        data,
        error
    }
}

export default usePodcastEpisodes