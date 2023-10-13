import { getPodcastUrl } from "../services/itunes"
import { getCachedPodcast } from "../utils/getCachePodcast"
import useFetch from "./useFetch"
import useTopPodcasts from "./useTopPodcasts"

const usePodcast = (id) => {
    // This saves a call since useTopPodcasts will fetch the podcasts only if needed
    const { loading, error } = useTopPodcasts()
    const cachedPodcast = getCachedPodcast(id)
    const { data } = useFetch(getPodcastUrl(id))
    console.log({ data })
    return {
        loading,
        data: cachedPodcast,
        error
    }
}

export default usePodcast