enum CacheKeys {
    requests = 'REQUESTS'
}

interface CacheResponse {
    response: object | string,
    lastUpdated: Date,
}

export const getFetchKey = {
    topPodcasts: (amount: number) => `top-podcasts-${amount}`,
    podcast: (podcastId: string) => `podcast-${podcastId}`,
    podcastSummary: (podcastId: string) => `podcast-${podcastId}-summary`,
    podcastEpidodes: (podcastId: string) => `podcast-${podcastId}-episodes`,
}

export const getCachedResponse = (id: string): CacheResponse | null => {
    const cachedStrings = localStorage.getItem(id)
    const cachedResponses = JSON.parse(cachedStrings || '{}')
    if (cachedResponses[id]){
        return {
            ...cachedResponses,
            lastUpdated: new Date(cachedResponses[id].date)
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