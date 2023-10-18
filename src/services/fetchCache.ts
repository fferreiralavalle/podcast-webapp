import { dateDiffInDays } from "../utils/shouldUpdatePodcasts";
import { getCachedResponse, setCacheResponse } from "./cache";

interface FetchResponse {
    data: { [key: string] : any } | null,
    error?: string
}
// We need an async function to give to the loader that caches successful data
const fetchCache = async (url: string, init, id?: string, formatter?: Function): Promise<FetchResponse> => {
    const isDevEnvironment = import.meta.env.DEV;
    const cachedResponse = (id && !isDevEnvironment) ? getCachedResponse(id) : null
    const shouldMakeFetchCall = !cachedResponse || dateDiffInDays(new Date(), cachedResponse?.lastUpdated) > 1;

    if (shouldMakeFetchCall){
        try {
            const response = await fetch(url, init)
            if (!response.ok || response.status === 404){
                return {
                    data: null,
                    error: 'An error has occurred'
                }
            }
            const data = await response.json();
            const formattedData = formatter && !isDevEnvironment? formatter(data) : data
            if (id)
                setCacheResponse(id, formattedData)
            return {
                data: formattedData
            }
        } catch (e) {
            return {
                data: null,
                error: e
            }
        }
    }
    else{
        return {
            data: cachedResponse.response as object
        }
    }
}

export const fetchCacheXML = async (url: string, init, id?: string): Promise<FetchResponse> => {
    const isDevEnvironment = import.meta.env.DEV;
    const cachedResponse = (id && !isDevEnvironment) ? getCachedResponse(id) : null
    const shouldMakeFetchCall = !cachedResponse || dateDiffInDays(new Date(), cachedResponse?.lastUpdated) > 1;

    if (shouldMakeFetchCall){
        try {
            const response = await fetch(url, init)
            if (!response.ok || response.status === 404){
                return {
                    data: null,
                    error: 'An error has occurred'
                }
            }
            const dataString = await response.text();
            const parser = new DOMParser();
            const data = parser.parseFromString(dataString, 'text/xml');
            if (id)
                setCacheResponse(id, dataString)
            return {
                data
            }
        } catch (e) {
            return {
                data: null,
                error: 'An error has occurred'
            }
        }
    }
    else{
        const parser = new DOMParser();
        const data = parser.parseFromString(cachedResponse.response as string, 'text/xml');
        return {
            data
        }
    }
}

export default fetchCache