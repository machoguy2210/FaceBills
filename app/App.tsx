
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './index';
import SuccessfulScreen from './SuccessfulScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IndexScreen">
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
        <Stack.Screen name="SuccessfulScreen" component={SuccessfulScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;