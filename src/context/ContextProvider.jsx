import React from "react"
import { useContext, useState } from "react"
import { AppContext } from "./AppContext"

export const useAppContext = () => useContext(AppContext)

export const ContextProvider = ({children}) => {
 
    const [contextState, setContextState] = useState({
        actualView: "Vista principal",
        AllPodCasts: [],
        ActualViewPodCasts: [],
        Loading: true,
        
    })

    return (

        <AppContext.Provider value={{contextState, setContextState}}>
            {children}
        </AppContext.Provider>
    )
}
