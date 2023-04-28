

export const getPodCastById = (id, contextState) => {
  
    return contextState.AllPodCasts.find( podcast => podcast['id']['attributes']['im:id'] === id)
}
