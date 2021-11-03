import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import GameScreen from '../screens/GameScreen';
import SelectPlayerScreen from '../screens/SelectPlayer';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="SelectPlayer">
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
