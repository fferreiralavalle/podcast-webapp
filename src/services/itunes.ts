import formatDuration from "../utils/formatDuration"

export interface TopPodcastItem {
    title: string,
    artist: string,
    image: string,
    id: string
}

export interface PodcastEpisodeItem {
    title: string,
    date: Date,
    duration: string,
    id: string,
}

export const getTopPodcastUrl = (amount) => `https://itunes.apple.com/us/rss/toppodcasts/limit=${amount}/genre=1310/json`

export const getPodcastUrl = (podcastId) => `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast`

export const getPodcastEpisodeUrl = (podcastId) => `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`

export const formatPodcastsEntries = (entryList): Array<TopPodcastItem> => {
    if (entryList){
        return entryList.map(e => ({
            title: e.title.label,
            summary: e.summary.label,
            artist: e['im:artist'].label,
            image: e['im:image'][e['im:image'].length - 1].label,
            id: e.id.attributes['im:id'],
        }))
    }
    return []
}

export const formatPodcastEpisodes = (entryList): Array<PodcastEpisodeItem> => {
    if (entryList){
        return entryList.map(e => ({
            title: e.trackName,
            date: new Date(e.releaseDate),
            duration: formatDuration(e.trackTimeMillis),
            id: e.trackId,
        }))
    }
    return []
}