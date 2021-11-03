import React, { createContext, useState } from 'react'

export const AppContext = createContext(AppProvider)

const AppProvider = ({ children }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  return (
    <AppContext.Provider value={{ selectedPlayer, setSelectedPlayer }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
