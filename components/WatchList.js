import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

import { createStackNavigator } from 'react-navigation';

class WatchList extends Component {
  static navigationOptions = {
    title: 'Watch List'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>WatchList</Text>
      </View>
    );
  }
}
export default createStackNavigator(
  {
    WatchList: WatchList
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
