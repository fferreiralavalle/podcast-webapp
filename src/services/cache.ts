enum CacheKeys {
    requests = 'REQUESTS'
}

interface CacheResponse {
    response: object,
    lastUpdated: Date,
}

export const getCachedResponse = (id: string): CacheResponse | null => {
    const cachedStrings = localStorage.getItem(CacheKeys.requests)
    const cachedResponses = JSON.parse(cachedStrings || '{}')
    if (cachedResponses[id]){
        return {
            ...cachedResponses[id],
            lastUpdated: new Date(cachedResponses[id].date)
        }
    }
    return null
}

export const setCacheResponse = (id: string, data) => {
    // Get all cached podcast details
    const cachedStrings = localStorage.getItem(CacheKeys.requests)
    const cachedResponses = JSON.parse(cachedStrings || '{}')
    // We need the date for refreshing
    const cacheWithDate = {
        response: data,
        lastUpdated: +new Date()
    }
    cachedResponses[id] = cacheWithDate
    localStorage.setItem(CacheKeys.requests, JSON.stringify(cachedResponses))
}