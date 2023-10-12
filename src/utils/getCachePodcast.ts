import { TopPodcastItem } from "../services/itunes"
import { getCachedPodcasts } from "./getCachedPodcasts"

export const getCachedPodcast = (podcastId: string): TopPodcastItem | null => {
    const topPodcasts = getCachedPodcasts()
    if (topPodcasts){
        const podcast = topPodcasts[podcastId]
        return podcast
    }
    return null
}