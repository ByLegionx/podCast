import {useState, useEffect }from 'react'
import { getAllSongs  } from './getAllSongs';




export const useFetchSongs = () => {
  
  const [allSongsList, setAllSongs] = useState([])

  useEffect(() => {
    getAllPodCasts();  
  }, [])

  
  const getAllPodCasts = async () => {
    const songs = await getAllSongs()
    const {entry} = songs
    setAllSongs(entry)
    
  }
  
  return{
    allSongsList:allSongsList
  }
}
