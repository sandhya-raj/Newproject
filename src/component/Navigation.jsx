import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screen/Register';
import Splash from '../screen/Spalsh';
import Landing from '../screen/Landing';
import OtpScreen from '../screen/OtpScreen';
import SignIn from '../screen/SignIn';
import Forgetpass from '../screen/Forgetpass';
import Home from '../screen/Dashboard';
import TabBar from './Tabbar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screen/Profile';
import Explore from '../screen/Explore';
import Favorite from '../screen/Favorite';
import BookingScreen from '../screen/BookingScreen';
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Forgetpass" component={Forgetpass} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name={'Tabs'} component={Tabs} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen
        options={{headerShown: false}}
        name={'Explore'}
        component={Explore}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name={'Favorite'}
        component={Favorite}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Booking"
        component={BookingScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
