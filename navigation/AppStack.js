import React, { useEffect, useContext, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GameScreen from '../screens/GameScreen';
import SelectPlayerScreen from '../screens/SelectPlayer';

const Stack = createStackNavigator();

const AppStack = () => {
  const [hasActiveGame, setHasActiveGame] = useState(false);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('gameStarted').then(value => {
      if (value == null) {
        setHasActiveGame(false);
      } else {
        setHasActiveGame(true);
      }
    });
  }, []);

  if (hasActiveGame) {
    routeName = 'Game';
  } else {
    routeName = 'SelectPlayer';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="SelectPlayer"
        component={SelectPlayerScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Game"
        component={GameScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
