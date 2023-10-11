export const getTopPodcastUrl = (amount) => `https://itunes.apple.com/us/rss/toppodcasts/limit=${amount}/genre=1310/json`

export const parseEntries = (entryList) => {
    if (entryList){
        return entryList.map(e => ({
            title: e.title.label,
            artist: e['im:artist'].label,
            image: e['im:image'][e['im:image'].length - 1].label,
            id: e.id.label,
        }))
    }
    return []
}