import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Amplify from 'aws-amplify';
import awsExports from './src/aws-exports';

import HomeScreen from './src/Components/HomeScreen';
import DetailsScreen from './src/Components/DetailsScreen';
import ShopScreen from './src/Components/Shop';
import ProfileScreen from './src/Components/Profile';
import AuthLoadingScreen from './src/Components/AuthLoadingScreen';
import SignInScreen from './src/Components/SignInScreen';
import SignUpScreen from './src/Components/SignUpScreen';
import UserConfirmScreen from './src/Components/UserConfirmScreen';

Amplify.configure(awsExports);

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

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
  UserConfirm: UserConfirmScreen
});

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
