import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ex5p1 from './component/ex5p1';
import ex5p2 from './component/ex5p2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ex5p1} />
        <Stack.Screen name="Details" component={ex5p2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
