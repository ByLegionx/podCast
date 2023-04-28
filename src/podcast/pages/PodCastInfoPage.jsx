import React, { useMemo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/ContextProvider';
import { PodCaster } from '../../songs/components/PodCaster';
import { getPodCastById } from '../helpers/getPodCastById';

import "../styles/podCastStyle.css"

import { getPodcastMinutes } from '../helpers/getPodcastMinutes';
import { PodCastNavbar } from '../../songs/components/PodCastNavbar';

import { PodcastTable } from '../../songs/components/PodcastTable';


export const PodCastInfoPage = () => {
  
  const {contextState, setContextState} = useAppContext();
  const [response, setResponse] = useState([])

  
  const {id} = useParams();

  const podcast = useMemo(()=>getPodCastById(id,contextState), [id]);



  
  useEffect(() => {
    
    if(response.length>0){
      setContextState({
        ...contextState,
        
        Loading: false,
      })

    }
  }, [response])
  

  useEffect(() => {

    setContextState({
      ...contextState,
      actualView: "Vista detalle",
      ActualViewPodCasts: [podcast],
      Loading: true,
    })

    const getAllMinutes = async () => {

      await getPodcastMinutes(setResponse, podcast['id']['attributes']['im:id'])
      
    }
    getAllMinutes();
  }, [])

  return (
    <div className='main-div-container'>
      <PodCaster/>
      <div className='div-main-container'>
      <PodCastNavbar/>
  
        <div className='episodes-container'>
          <PodcastTable response = {response}/>
        </div>
      </div>

    </div>
  )
}

