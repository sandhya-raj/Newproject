import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Register from '../screen/Register';
import Splash from '../screen/Spalsh';
import Home from '../screen/Home';
import OtpScreen from '../screen/OtpScreen';
import SignIn from '../screen/SignIn';
import Forgetpass from '../screen/Forgetpass';
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Forgetpass" component={Forgetpass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
