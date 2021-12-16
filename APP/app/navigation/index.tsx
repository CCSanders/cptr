import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, CaptureScreen, ExploreScreen, ProfileScreen, SignInScreen } from '../screens';


const AuthStack = createStackNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignInScreen" component={SignInScreen}/>
    </AuthStack.Navigator>
  );
};

const HomeNavigator = createBottomTabNavigator();
function HomeNavigatorScreen() {
  return (
    <HomeNavigator.Navigator screenOptions={{ headerShown: false }}>
      <HomeNavigator.Screen name="Home" component={HomeScreen}/>
      <HomeNavigator.Screen name="Explore" component={ExploreScreen}/>
      <HomeNavigator.Screen name="Capture" component={CaptureScreen}/>
      <HomeNavigator.Screen name="Profile" component={ProfileScreen}/>
    </HomeNavigator.Navigator>
  );
};

const MainStack = createStackNavigator();

//TODO: This is fake auth for testing. 
const AppNavigator = () => (
  <NavigationContainer>
    <MainStack.Navigator initialRouteName='AuthStack' screenOptions={{ headerShown: false }}>
      
      { false ? (
        <MainStack.Screen name='AuthStack' component={AuthStackScreen} />
      ) : (
        <MainStack.Screen name='HomeStack' component={HomeNavigatorScreen}/>
      )}

    </MainStack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;