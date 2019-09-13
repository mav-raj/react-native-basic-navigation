import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default class Signup extends Component {
  static navigationOptions = {
    title: 'Signup with Email'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Signup Screen</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>User Signups with email</Text>
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
