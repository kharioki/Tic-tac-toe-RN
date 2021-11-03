import React, { useState, useEffect, useContext } from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AppContext } from '../navigation/AppProvider'

import Board from '../components/Board'
import { calculateWinner } from '../utils/helpers'

const GameScreen = () => {
  const { selectedPlayer } = useContext(AppContext)

  const [gameStarted, setGameStarted] = useState(false)
  const [boardHistory, setBoardHistory] = useState([Array(9).fill(null)])
  const [xIsNext, setXIsNext] = useState(null)
  const [stepNumber, setStepNumber] = useState(0)

  const winner = calculateWinner(boardHistory[stepNumber])

  // check draw
  const draw = boardHistory[stepNumber].every(square => square !== null)

  // computer move
  const handleComputerMove = () => {
    const history = boardHistory.slice(0, stepNumber + 1)
    const current = history[stepNumber] // current board
    const newBoard = [...current]
    let newStepNumber = stepNumber

    let emptySquares = []
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === null) {
        emptySquares.push(i)
      }
    }

    const randomIndex = Math.floor(Math.random() * emptySquares.length)
    newBoard[emptySquares[randomIndex]] = selectedPlayer === 'X' ? 'O' : 'X'
    newStepNumber++

    setBoardHistory(prev => [...prev, newBoard])
    setStepNumber(newStepNumber)
    setXIsNext(!xIsNext)
  }

  const handleClick = (i) => {
    const history = boardHistory.slice(0, stepNumber + 1)
    const current = history[stepNumber] // current board
    const squares = [...current] // copy of current board

    // if user clicks on an occupied square or if game is won, return
    if (winner || squares[i]) return

    // put an 'O' in the clicked square
    squares[i] = selectedPlayer
    setBoardHistory([...history, squares])
    setStepNumber(history.length)
    setXIsNext(!xIsNext)
  }

  const handleStartGame = () => {
    if (gameStarted) {
      setBoardHistory([Array(9).fill(null)])
      setStepNumber(0)
      setXIsNext(null)
    }
    setGameStarted(!gameStarted)
  }

  useEffect(() => {
    // listen for computers turn 
    if (xIsNext && !winner) {
      handleComputerMove()
    }
  }, [xIsNext])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Tic Tac Toe!</Text>
        <Board board={boardHistory[stepNumber]} onPress={handleClick} isStarted={gameStarted} />
        {gameStarted && (
          <View>
            {winner ? (
              <Text style={styles.winner}>{winner === selectedPlayer ? 'You Win' : 'CPU Wins'}</Text>
            ) : (
              <Text style={styles.winner}>{draw ? "Oops, Draw!!!" : xIsNext ? "CPU'S turn" : 'Your turn'}</Text>
            )}
          </View>
        )}
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => handleStartGame()}>
            <Text style={styles.btnText}>{!gameStarted ? 'START GAME' : 'RESTART'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    color: '#777',
  },
  winner: {
    fontSize: 20,
    marginBottom: 10,
    color: '#777',
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  btn: {
    backgroundColor: 'blue',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default GameScreen
