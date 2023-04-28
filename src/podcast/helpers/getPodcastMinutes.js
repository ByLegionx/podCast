


export const getPodcastMinutes = async(setResponse, id) => {
        
        const cachedData = localStorage.getItem(`podcastEpisodes-${id}`)
        const cachedTime = localStorage.getItem(`podcastEpisodesTime-${id}`)
        const now = Date.now()
      
        if (cachedData && cachedTime && now < cachedTime) {
                setResponse(JSON.parse(cachedData))
        } else {
          try {
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/lookup?id='+id+'&media=podcast&entity=podcastEpisode&limit=200')}`)
            if (!response.ok) {
              throw new Error('Network response was not ok.')
            }
            const data = await response.json()
            const contents = JSON.parse(data.contents)
            const expirationTime = now + 24 * 60 * 60 * 1000 // 1 día de caché
            localStorage.setItem(`podcastEpisodes-${id}`, JSON.stringify(contents.results))
            localStorage.setItem(`podcastEpisodesTime-${id}`, expirationTime.toString())
            setResponse(contents.results)
            
          } catch (error) {
            console.error(error)
          }
        }
      
}
