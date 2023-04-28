import React from "react"

import { ActualView } from "../podcast/pages/ActualView"
import { PodCastRoutes } from "../podcast/routes/PodCastRoutes"
import { Route, Routes } from "react-router-dom"

export const AppRouter = () => {
  return (
    <>
        <Routes>  
            <Route path="/" element={<ActualView/>} />
            <Route path="/*" element={<PodCastRoutes />} />
        </Routes>
    
    </>
  )
}
