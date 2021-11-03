import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Board = ({ board, onPress, isStarted }) => {
  // render boards rows
  const renderRows = () => {
    const rows = []
    for (let i = 0; i < 3; i++) {
      rows.push(
        <View key={i} style={styles.row}>
          {renderCells(i)}
        </View>
      )
    }
    return rows
  }

  // render cells
  const renderCells = (rowIndex) => {
    const cells = []
    for (let i = 0; i < 3; i++) {
      let index = rowIndex * 3 + i
      cells.push(
        <TouchableOpacity
          key={i}
          style={styles.cell}
          onPress={() => onPress(index)}
          disabled={!isStarted}>
          <Text style={styles.cellText}>{board[index]}</Text>
        </TouchableOpacity>
      )
    }
    return cells
  }

  return (
    <View style={styles.gridContainer}>
      {renderRows()}
    </View>
  )
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'column',
    width: '100%',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cellText: {
    fontSize: 50,
    color: '#777',
  },
})

export default Board
