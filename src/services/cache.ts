interface CacheResponse {
    response: object | string,
    lastUpdated: Date,
}

export const getFetchKey = {
    topPodcasts: (amount: number) => `top-podcasts-${amount}`,
    podcast: (podcastId: string) => `podcast-${podcastId}`,
    podcastSummary: (podcastId: string) => `podcast-${podcastId}-summary`,
    podcastEpidodes: (podcastId: string) => `podcast-${podcastId}-episodes`,
    podcastEpidode: (episodeId: string) => `podcast-episode-${episodeId}`,
}

export const getCachedResponse = (id: string): CacheResponse | null => {
    const cachedStrings = localStorage.getItem(id)
    if (cachedStrings){
        const cachedResponses = JSON.parse(cachedStrings || '{}')
        return {
            ...cachedResponses,
            lastUpdated: new Date(cachedResponses.lastUpdated)
        }
    }
    return null
}

export const setCacheResponse = (id: string, data) => {
    // We need the date for refreshing
    const cacheWithDate = {
        response: data,
        lastUpdated: +new Date()
    }
    try {
        localStorage.setItem(id, JSON.stringify(cacheWithDate))
    }
    catch (e){
        console.log('Quota size exceeded')
    }
}