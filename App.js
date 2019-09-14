import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Components Import
// import LoginSignupOptionComponent from './components/LoginSignupOption';
// import LoginComponent from './components/Login';
// import SignupComponent from './components/Signup';
// import MainComponent from './components/Main';
import AuthStack from './components/AuthStack'
import AppStack from './components/AppStack'

// export default class App extends Component {

//   render() {
//     return (
//       <AppContainer />
//     );
//   }
// };

const styles = StyleSheet.create({

});

const AppSwitchNavigator = createSwitchNavigator(
  {
    // Add flash screen here
    AuthStack: AuthStack,
    AppStack: AppStack
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default AppContainer = createAppContainer(AppSwitchNavigator);
