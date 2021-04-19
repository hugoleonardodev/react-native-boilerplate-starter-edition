// In App.js in a new project
// import 'react-native-gesture-handler';

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailsScreen from './src/screens/DetailsScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Details" component={ DetailsScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
