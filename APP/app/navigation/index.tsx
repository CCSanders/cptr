import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { 
  HomeScreen, 
  CaptureScreen, 
  CapturePreviewScreen,
  ExploreScreen, 
  ProfileScreen, 
  SignInScreen, 
  ProfileInitScreen 
} from '../screens';
import { AppContext } from '../context';


const AuthStack = createStackNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
    </AuthStack.Navigator>
  );
};

const ProfileInitStack = createStackNavigator();
function ProfileInitStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="ProfileInitScreen" component={ProfileInitScreen} />
    </AuthStack.Navigator>
  );
};

const CaptureStack = createStackNavigator();
function CaptureStackScreen() {
  return (
    <CaptureStack.Navigator screenOptions={{ headerShown: false }}>
      <CaptureStack.Screen name="CaptureScreen" component={CaptureScreen} />
      <CaptureStack.Screen name="CapturePreviewScreen" component={CapturePreviewScreen} />
    </CaptureStack.Navigator>
  );
}

const HomeNavigator = createBottomTabNavigator();
function HomeNavigatorScreen() {
  return (
    <HomeNavigator.Navigator screenOptions={{ headerShown: false }}>
      <HomeNavigator.Screen name="Home" component={HomeScreen} />
      <HomeNavigator.Screen name="Explore" component={ExploreScreen} />
      <HomeNavigator.Screen name="CaptureStack" component={CaptureStackScreen} />
      <HomeNavigator.Screen name="Profile" component={ProfileScreen} />
    </HomeNavigator.Navigator>
  );
};

const MainStack = createStackNavigator();

const AppNavigator = () => {

  const { user, auth } = useContext(AppContext);

  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
        { auth.user ? ( //is authed?
          <>
            { user.initialized ? ( // is initialized?
              <MainStack.Screen name='HomeStack' component={HomeNavigatorScreen} />
            ) : (
              <MainStack.Screen name='ProfileInitStack' component={ProfileInitStackScreen} />
            )}
          </>
        ) : (
          <MainStack.Screen name='AuthStack' component={AuthStackScreen} />
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  )
};

export default AppNavigator;