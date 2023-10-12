enum storageKeys {
    podcasts = 'PODCAST_KEY',
    lastUpdated = 'LAST_UPDATED_KEY'
}

export const getCachedPodcasts = () => {
    const topPodcasts = localStorage.getItem(storageKeys.podcasts)
    if (topPodcasts){
        return JSON.parse(topPodcasts)
    }
    return null
}

export const setCachedPodcasts = (podcastList) => {
    localStorage.setItem(storageKeys.podcasts, JSON.stringify(podcastList))
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