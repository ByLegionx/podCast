import React from 'react'
import { getDataAndDate } from '../../podcast/helpers/getDataAndDate'
import { Link } from 'react-router-dom'

export const PodcastTable = ({response}) => {
    console.log(response)
  return (
        <>
            <div className='podCast-minutes-list'>
                <header className='header-episode'>
                <h2>Episodes : {response.length && response.length-1}</h2>
                </header>
            </div>
            <div className='table-container-div'>
            
                <table className='table-tag'>
                    <thead>
                    <tr>
                        <th style={{textAlign: "left"}}>Title</th>
                        <th style={{textAlign: "right"}}>Date</th>
                        <th style={{textAlign: "right"}}>Duration</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {response.length>0 && response.slice(1).map((minute) => {
                        
                        const {time, formattedDate} = getDataAndDate(minute)
                    
                        const {trackId, trackName} = minute
    
                        return (
                            <tr key={trackId} style={{ height: '50px', borderBottom:1 }}>
                            <td style={{ textAlign: "left" }}>
                            <Link to={`episode/${trackId}`} className= "link-episodes" >
                            
                                {trackName}
                                </Link>                     
                            </td>
                            <td style={{ textAlign: "right" }}>{formattedDate}</td>
                            <td style={{ textAlign: "right" }}>{time}</td>
                            
    
                            </tr>
                        )
                    })}
                    </tbody>
                    </table>
                    
                    
                
            </div>
          </>
  )
}
