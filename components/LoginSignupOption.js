import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default class LoginSignupOption extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>LoginSignupOption</Text>
        <TouchableOpacity >
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Facebook Login/Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Google Login/Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Login with email</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupScreen')}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Signup with email</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
