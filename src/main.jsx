import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './context/ContextProvider'

import './index.css'
import { PodCastApp } from './PodCastApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
 
    <BrowserRouter>
      <ContextProvider>
        <PodCastApp />
      </ContextProvider>
    </BrowserRouter>
 
)


