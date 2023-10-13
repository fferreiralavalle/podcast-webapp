import { Podcast, formatPodcast } from "../services/itunes"
import { storageKeys } from "./getCachedPodcasts"

export const getCachedPodcast = (podcastId): Podcast | null => {
    const podcastsString = localStorage.getItem(storageKeys.podcasts)
    const podcasts = JSON.parse(podcastsString || '{}')
    const podcast = formatPodcast(podcasts[podcastId])
    return podcast
}

export const setCachedPodcast = (podcast: Podcast) => {
    // Get all cached podcast details
    const podcastsString = localStorage.getItem(storageKeys.podcasts)
    const podcasts = JSON.parse(podcastsString || '{}')
    // We need the date for refreshing
    const podcastWithDate = {
        podcast: {
            ...podcast,
            episodes: podcast.episodes.map(e => ({
                ...e,
                date: +e.date
            }))
        },
        lastUpdated: +new Date()
    }
    podcasts[podcast.id] = podcastWithDate
    localStorage.setItem(storageKeys.podcasts, JSON.stringify(podcasts))
}