import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const AuthStack =()=> (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component= {Home}/>
      </Stack.Navigator>
    </NavigationContainer>
);

const NavigationProvider = ()=>{
    return <AuthStack />;
}

export default NavigationProvider;