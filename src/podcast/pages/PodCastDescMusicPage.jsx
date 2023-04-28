import React, { useEffect, useMemo, useState } from 'react'
import { PodCaster } from '../../songs/components/PodCaster'
import { getPodCastById } from '../helpers/getPodCastById';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../context/ContextProvider';
import "../styles/podCastStyle.css"
import { getPodcastMinutes } from '../helpers/getPodcastMinutes';
import { PodCastNavbar } from '../../songs/components/PodCastNavbar';

export const PodCastDescMusicPage = () => {

  const {contextState,setContextState} = useAppContext();
  const {id, epId} = useParams();
  const [response, setResponse] = useState(null)
  const [episode, setEpisode] = useState(null)

  
  const podcast = useMemo(()=>getPodCastById(id,contextState), [id]);
  

  useEffect(() => {
    setContextState({
      ...contextState,
      Loading:true
    })
    const getAllMinutes = async () => {
      await getPodcastMinutes(setResponse, podcast['id']['attributes']['im:id'])
      
    }
    getAllMinutes();
  }, [])

  

  useEffect(() => {
    if(response !== null){
      setContextState({
        ...contextState,
        Loading:false
      })
      const foundPodcast = response.filter(podcast => podcast.trackId == epId)
      setEpisode(foundPodcast)
    }

  }, [response]);

  return (
    <div className='main-div-container'>
    <PodCaster/>
     <div className='div-main-container'>
      <PodCastNavbar/>
        <div className='episodes-container'>
          <div className='podCast-minutes-list'>
          {episode  &&
            <>
              <header>
              
                  <div className='div-title-description'>
                    <h1>{episode[0].trackName}</h1>
                    <p style={{color:"grey"}}><i dangerouslySetInnerHTML={{__html: episode[0].description}}></i></p>
                  </div>
              
              </header>
              <footer className='footer-source-audio'>
                <audio controls className="audio-source" >
                    <source src={episode[0].episodeUrl} type="audio/mpeg"/>
                </audio>
              </footer>
            </>
            }
          </div>
        </div>
      </div>
    </div>

  )
}
