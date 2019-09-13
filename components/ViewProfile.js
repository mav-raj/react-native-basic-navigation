import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler
} from "react-native";

class ViewProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ViewProfile</Text>
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
export default ViewProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
