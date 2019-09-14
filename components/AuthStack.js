import { createStackNavigator } from 'react-navigation';

// AuthStack Imports
import LoginSignupOptionComponent from './LoginSignupOption';
import LoginComponent from './Login';
import SignupComponent from './Signup';

export default createStackNavigator(
  {
    LoginSignupOptionScreen: LoginSignupOptionComponent,
    LoginScreen: LoginComponent,
    SignupScreen: SignupComponent,
  },
  {
    // hide header if component is just a stack navigator
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);
