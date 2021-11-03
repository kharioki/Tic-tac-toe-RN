import React, { useContext } from 'react'
import { SafeAreaView, View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { AppContext } from '../navigation/AppProvider'

const SelectPlayerScreen = ({ navigation }) => {
  const { setSelectedPlayer } = useContext(AppContext)

  const handleSelectPlayer = (player) => {
    setSelectedPlayer(player)
    navigation.navigate('Game')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={[styles.text, { fontSize: 30 }]}>Let's play Tic Tac Toe!!!'</Text>
        <Text style={[styles.text, { fontSize: 20 }]}>Select your Player piece</Text>
        <View style={styles.pieceRow}>
          <TouchableHighlight underlayColor="#ddd" activeOpacity={0.2} style={styles.piece} onPress={() => handleSelectPlayer('X')}>
            <Text style={styles.pieceText}>X</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#ddd" activeOpacity={0.2} style={styles.piece} onPress={() => handleSelectPlayer('O')}>
            <Text style={styles.pieceText}>O</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  pieceRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  piece: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  pieceText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
})

export default SelectPlayerScreen
