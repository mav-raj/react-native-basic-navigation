import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  TouchableOpacity
} from "react-native";
import { createStackNavigator } from 'react-navigation';

class UpdatePassword extends Component {
  static navigationOptions = {
    title: 'Update Password'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>UpdatePassword</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Password get updated</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default createStackNavigator(
  {
    UpdatePassword: UpdatePassword
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
