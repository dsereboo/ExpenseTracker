// import {NavigationContainer} from '@react-navigation/native'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Article from './src/screens/Article';
import BalanceDetails from './src/screens/BalanceDetails';
import Home from './src/screens/Home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Article"
          component={Article}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Balance"
          component={BalanceDetails}
          // options={{
          //   headerShown:false,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


