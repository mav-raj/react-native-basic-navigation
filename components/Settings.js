import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler
} from "react-native";

import { createStackNavigator } from 'react-navigation';

// Components Import
import UpdatePasswordComponent from './UpdatePassword';
import ViewProfileComponent from './ViewProfile';

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.navigate('Home'));
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => true);
  }
}
// export default Settings
export default createStackNavigator(
  {
    Settings: Settings
  }

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
