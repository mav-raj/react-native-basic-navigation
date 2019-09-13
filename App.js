import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

// Components Import
import LoginSignupOptionComponent from './components/LoginSignupOption';
import LoginComponent from './components/Login';
import SignupComponent from './components/Signup';
import MainComponent from './components/Main';

// export default class App extends Component {

//   render() {
//     return (
//       <AppContainer />
//     );
//   }
// };

const styles = StyleSheet.create({

});

const AppStackNavigator = createStackNavigator(
  {
    LoginSignupOptionScreen: LoginSignupOptionComponent,
    LoginScreen: LoginComponent,
    SignupScreen: SignupComponent,
    MainScreen: MainComponent,
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default AppContainer = createAppContainer(AppStackNavigator);
