import { useEffect, useState } from "react"
import { combinePodcastData, formatPodcast, getPodcastEpisodesUrl, getPodcastUrl } from "../services/itunes"
import useFetch from "./useFetch"

const usePodcast = (id) => {
    const { data, loading, error } = useFetch(getPodcastUrl(id), null, `podcast-${id}`)
    const { data: epData, loading: epLoading } = useFetch(getPodcastEpisodesUrl(id), null, `podcast-episodes-${id}`)
    const [ summary, setSummary ] = useState(null)
    const [combinedData, setCombinedData] = useState(null)
    const [errorSummary, setErrorSummary] = useState(null)
    const [loadingSummary, setLoadingSummary] = useState(true)

    useEffect(() => {
        if (!loading && !epLoading && !loadingSummary){
            const combined = combinePodcastData(data?.results[0], summary, epData?.results)
            const formatted = formatPodcast(combined)
            setCombinedData(formatted)
        }
    }, [loading, epLoading, loadingSummary, data, summary, epData])

    useEffect(() => {
        if (data && !errorSummary){
            // We need to make an extra call for the summary
            const podcast = data?.results[0]
            fetch(podcast?.feedUrl)
            .then(response => response.text())
            .then(feedData => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(feedData, 'text/xml');
                const summary = xmlDoc.querySelector('description')?.textContent;
                setSummary(summary)
                setLoadingSummary(false)
            })
            .catch(error => {
                setLoadingSummary(false)
                setErrorSummary(error)
                console.log('Error fetching or parsing XML:', error);
            });
        }
    }, [data, epLoading, epData, combinedData, errorSummary])

    return {
        loading: loading || epLoading,
        loadingSummary,
        data: combinedData,
        error
    }
}

export default usePodcast