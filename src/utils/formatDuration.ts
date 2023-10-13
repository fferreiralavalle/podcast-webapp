const formatDuration = (durationMiliseconds) => {
    const minutes = Math.floor(durationMiliseconds / (1000 * 60))
    const seconds = Math.floor(durationMiliseconds / (1000)) - minutes * 60
    const minutesFormatted = minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
    const secondsFormatted = seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })

    return `${minutesFormatted}:${secondsFormatted}`
}

export default formatDuration