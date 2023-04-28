import React from 'react'
import { Link } from 'react-router-dom'

export const PodCastCard = (song) => {
      
  return (
  <Link to={`podcast/${song['id']['attributes']['im:id']}`} className= "links-songs" >
   <div className='shadow-song-container' >
      <div className='container-all-info-cards'>
            <main>
                  <article className='image-song-container'>
                        <img className="icon-song" src={song['im:image'][2]['label']}   />
                  </article>
                  <article className='artist-container'>
                        <p><b>{song['im:name']['label'].toUpperCase()}</b></p>       
                  </article>
            </main>
           <footer>
                  <article className='artist-container'>
                        <p className='paragraph-artist'>Author: {song['im:artist']['label']}</p>       
                  </article>
            </footer>
                  
        </div>
   </div>
   </Link>
  )
}
