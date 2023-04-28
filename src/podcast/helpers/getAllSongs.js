
export const getAllSongs = async() => {

    const cachedData = localStorage.getItem('podcastsData')
    const cachedTime = localStorage.getItem('podcastsDataTime')
    const now = Date.now()

    if (cachedData && cachedTime && now < cachedTime) {

        return JSON.parse(cachedData)
    } else {
   
        const data = await fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`)
        const {feed} = await data.json();

    
        const expirationTime = now + 24 * 60 * 60 * 1000

        
        localStorage.setItem('podcastsData', JSON.stringify(feed))
        localStorage.setItem('podcastsDataTime', expirationTime.toString())

      
        return feed
    } 
}
