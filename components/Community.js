import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

import { createStackNavigator } from 'react-navigation';

class Community extends Component {
  static navigationOptions = () => {
    return {
      title: 'Community'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Community</Text>
      </View>
    );
  }
}
export default createStackNavigator(
  {
    Community: Community
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
