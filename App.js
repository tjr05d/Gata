import { createSwitchNavigator, createStackNavigator } from 'react-navigation'; 
import HomeScreen from './src/Components/HomeScreen';
import DetailsScreen from './src/Components/DetailsScreen'; 
import AuthLoadingScreen from './src/Components/AuthLoadingScreen';
import SignInScreen from './src/Components/SignInScreen';
import SignUpScreen from './src/Components/SignUpScreen';
import UserConfirmScreen from './src/Components/UserConfirmScreen';


const AppStack = createStackNavigator({ Home: HomeScreen, Details: DetailsScreen});
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
)

