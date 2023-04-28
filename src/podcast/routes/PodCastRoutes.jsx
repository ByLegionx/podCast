import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import { PodCastInfoPage } from '../pages/PodCastInfoPage'
import { PodCastDescMusicPage } from '../pages/PodCastDescMusicPage'

export const PodCastRoutes = () => {
  return (
    <>
        <div className='container'>
            <Routes>
                <Route path="podcast/:id" element={<PodCastInfoPage />} />
                <Route path="podcast/:id/episode/:epId" element={<PodCastDescMusicPage />} />
                <Route path="/" element={<Navigate to="/" />} />
            </Routes>
        </div>
        
    </>
  )
}
