import React from 'react'

import { useAppContext } from '../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';

export const PodCastNavbar = () => {
    
    const {contextState} = useAppContext();
    const navigate = useNavigate();

  return (
    <div className='podCast-container-info'>
        
        {contextState.ActualViewPodCasts[0] &&
        <section className='section-container-info'>
           <div className="links-songs" onClick={()=>{navigate(-1)}}>
                <section className='container-image-info-podcast'>
                    <section className='img-container-info'>
                        <img style={{borderRadius:10}} src={contextState.ActualViewPodCasts[0]['im:image'][2]['label']}   />
                    </section>         
                </section>
                <div style={{backgroundColor:"#F2F2F2", height:1, marginTop:25}}></div>
                <section className='artist-name-container'>
                    <p><b>{contextState.ActualViewPodCasts[0]['im:name']['label'].toUpperCase()}</b></p>  
                    <em>by {contextState.ActualViewPodCasts[0]['im:artist']['label']}</em>
                </section>
            </div>
            <div style={{backgroundColor:"#F2F2F2", height:1, marginTop:25}}></div>
            <section className='artist-name-container'>
                <p><b>Description: </b></p> 
                <p style={{color:"grey"}}><i>{contextState.ActualViewPodCasts[0]['summary']['label']}</i></p>       
            </section>
        </section>
        }


    </div>
  )
}
