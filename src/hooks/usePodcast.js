import { getCachedPodcast } from "../utils/getCachePodcast"
import useTopPodcasts from "./useTopPodcasts"

const usePodcast = (id) => {
    // This saves a call since useTopPodcasts will fetch the podcasts only if needed
    const { loading, error } = useTopPodcasts()
    const cachedPodcast = getCachedPodcast(id)

    return {
        loading,
        data: cachedPodcast,
        error
    }
}

export default usePodcast