export interface TopPodcastItem {
    title: string,
    artists: string,
    image: string,
    id: string
}

export const getTopPodcastUrl = (amount) => `https://itunes.apple.com/us/rss/toppodcasts/limit=${amount}/genre=1310/json`

export const getPodcastEpisodeUrl = (podcastId) => `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`

export const parseEntries = (entryList): Array<TopPodcastItem> => {
    if (entryList){
        return entryList.map(e => ({
            title: e.title.label,
            artist: e['im:artist'].label,
            image: e['im:image'][e['im:image'].length - 1].label,
            id: e.id.attributes['im:id'],
        }))
    }
    return []
}