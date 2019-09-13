import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler
} from "react-native";

class Settings extends Component {
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
export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
