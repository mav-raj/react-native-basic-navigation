import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { createStackNavigator } from 'react-navigation';

class Search extends Component {
  static navigationOptions = {
    title: 'Search'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Search</Text>
      </View>
    );
  }
}
export default createStackNavigator(
  {
    Search: Search
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
