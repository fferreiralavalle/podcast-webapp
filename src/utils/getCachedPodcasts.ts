export enum storageKeys {
    topPodcasts = 'TOP_PODCAST_KEY',
    podcasts = 'PODCAST_KEY',
    lastUpdated = 'LAST_UPDATED_KEY'
}

export const getTopCachedPodcasts = () => {
    const topPodcasts = localStorage.getItem(storageKeys.topPodcasts)
    if (topPodcasts){
        return JSON.parse(topPodcasts)
    }
    return null
}

export const setTopCachedPodcasts = (podcastList) => {
    localStorage.setItem(storageKeys.topPodcasts, JSON.stringify(podcastList))
    setLastUpdatedPodcasts(new Date())
}

export const getLastUpdatedPodcasts = (): Date | null => {
    const dateString = localStorage.getItem(storageKeys.lastUpdated)
    if (dateString == null) return null;
    const date = new Date(parseInt(dateString));
    return date
}

export const setLastUpdatedPodcasts = (dateTime: Date) => {
    localStorage.setItem(storageKeys.lastUpdated, (+dateTime).toString())
}