import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AppStack from './AppStack'
import { AppContext } from './AppProvider'

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}

export default Routes
