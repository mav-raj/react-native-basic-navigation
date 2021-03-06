import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { createStackNavigator, NavigationActions } from 'react-navigation';

class Search extends Component {
  static navigationOptions = {
    title: 'Search'
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Settings")}>
          <Text>settings</Text>
        </TouchableOpacity>
        <Text>Search</Text>
      </View >
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
