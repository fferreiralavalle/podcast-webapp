export enum StorageKeys {
    TopPodcasts = 'TOP_PODCAST_KEY',
    Podcasts = 'PODCAST_KEY',
    LastUpdated = 'LAST_UPDATED_KEY'
}

export const getTopCachedPodcasts = () => {
    const topPodcasts = localStorage.getItem(StorageKeys.TopPodcasts)
    if (topPodcasts){
        return JSON.parse(topPodcasts)
    }
    return null
}

export const setTopCachedPodcasts = (podcastList) => {
    localStorage.setItem(StorageKeys.TopPodcasts, JSON.stringify(podcastList))
    setLastUpdatedPodcasts(new Date())
}

export const getLastUpdatedPodcasts = (): Date | null => {
    const dateString = localStorage.getItem(StorageKeys.LastUpdated)
    if (dateString == null) return null;
    const date = new Date(parseInt(dateString));
    return date
}

export const setLastUpdatedPodcasts = (dateTime: Date) => {
    localStorage.setItem(StorageKeys.LastUpdated, (+dateTime).toString())
}