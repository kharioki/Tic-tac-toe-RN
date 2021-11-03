import React, { createContext, useState } from 'react'

export const AppContext = createContext(AppProvider)

const AppProvider = ({ children }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [boardHistory, setBoardHistory] = useState([Array(9).fill(null)])
  const [xIsNext, setXIsNext] = useState(null)
  const [stepNumber, setStepNumber] = useState(0)

  return (
    <AppContext.Provider
      value={{
        selectedPlayer,
        setSelectedPlayer,
        gameStarted,
        setGameStarted,
        boardHistory,
        setBoardHistory,
        xIsNext,
        setXIsNext,
        stepNumber,
        setStepNumber,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
