import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  TouchableOpacity
} from "react-native";
import { createStackNavigator } from 'react-navigation';

class ViewProfile extends Component {
  static navigationOptions = {
    title: 'View Profile'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>ViewProfile</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Profile get updated</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('UpdatePassword')}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Update Password</Text>
        </TouchableOpacity>

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
export default createStackNavigator(
  {
    ViewProfile: ViewProfile,
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
