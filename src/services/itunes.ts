import formatDuration from "../utils/formatDuration"
import formatSummary from "../utils/formatSummary"
import { getFetchKey } from "./cache"
import fetchCache, { fetchCacheXML } from "./fetchCache"

export interface TopPodcastItem {
    title: string,
    artist: string,
    image: string,
    id: string
}

export interface Podcast {
    title: string,
    id: string,
    summary: string,
    image: string,
    artist: string,
    episodes: Array<PodcastEpisodeItem>
}

export interface PodcastEpisodeItem {
    title: string,
    date: Date,
    duration: string,
    id: string,
}

export const getTopPodcastUrl = (amount) => `https://itunes.apple.com/us/rss/toppodcasts/limit=${amount}/genre=1310/json`

export const getPodcastUrl = (podcastId) => `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast`

export const getPodcastEpisodesUrl = (podcastId) => `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`

export const formatPodcastsEntries = (entryList): Array<TopPodcastItem> => {
    if (entryList){
        return entryList.map(e => ({
            title: e['im:name'].label,
            summary: e.summary.label,
            artist: e['im:artist'].label,
            image: e['im:image'][e['im:image'].length - 1].label,
            id: e.id.attributes['im:id'],
        }))
    }
    return []
}

export const combinePodcastData = (podcast, summary, episodes): Podcast | null => {
    if (podcast){
        return {
            ...podcast,
            summary,
            episodes: episodes
        }
    }
    return null;
}
export const formatPodcast = (podcast): Podcast | null => {
    if (podcast){
        return {
            title: podcast.collectionName,
            id: podcast.collectionId,
            summary: formatSummary(podcast?.summary),
            image: podcast.artworkUrl600,
            artist: podcast.artistName,
            episodes: formatPodcastEpisodes(podcast.episodes)
        }
    }
    return null;
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

export const fetchPodcastData = async (podcastId: string) => {
    const responses =  await Promise.all([
        fetchCache(getPodcastUrl(podcastId), null, getFetchKey.podcast(podcastId)),
        fetchCache(getPodcastEpisodesUrl(podcastId), null, getFetchKey.podcastEpidodes(podcastId)),
       ])
    const podcastBaseData = responses[0]?.data?.results[0]
    const podcastEpisodes = responses[1]?.data?.results
    const podcastSummary = podcastBaseData && (await fetchCacheXML(
        podcastBaseData?.feedUrl,
        null,
        getFetchKey.podcastSummary(podcastId)
    ))?.data
    const summaryString = podcastSummary?.querySelector('description')?.textContent;
    const combinedData = combinePodcastData(podcastBaseData, summaryString, podcastEpisodes)
    const formatted = formatPodcast(combinedData)
    return formatted
}

export const fetchTopPodcastsData = async (amount = 100) => {
    const result = await fetchCache(getTopPodcastUrl(amount), null, getFetchKey.topPodcasts(amount))
    return formatPodcastsEntries(result?.data?.feed?.entry)
}