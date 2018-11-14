import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'; 
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from './src/Components/HomeScreen';
import DetailsScreen from './src/Components/DetailsScreen'; 
import ShopScreen from './src/Components/Shop';
import ProfileScreen from './src/Components/Profile';
import AuthLoadingScreen from './src/Components/AuthLoadingScreen';
import SignInScreen from './src/Components/SignInScreen';
import SignUpScreen from './src/Components/SignUpScreen';
import UserConfirmScreen from './src/Components/UserConfirmScreen';

import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './src/aws-exports';
Amplify.configure(aws_exports);

const AppStack = createMaterialBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
    Shop: { screen: ShopScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    initialRouteName: 'Home',
    activeColor: 'white',
    inactiveColor: 'black',
    barStyle: { backgroundColor: '#527FFF' }
  }
);

const AuthStack =  createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen, UserConfirm: UserConfirmScreen });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    intialRouteName: 'AuthLoading',
  }
);