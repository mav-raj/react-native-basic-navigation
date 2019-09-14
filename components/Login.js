import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login with Email',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AppStack')}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>User Loggs In</Text>
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
