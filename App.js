import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Counter from './src/screens/Counter';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Login}
          name="Login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Counter} name="Counter" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
