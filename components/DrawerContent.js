import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { DrawerItems, withNavigation, NavigationActions } from 'react-navigation';

import SettingsComponent from './Settings';
import Home from './Home'

class DrawerContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DrawerContent</Text>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('NestedNavigator1', {}, NavigationActions.navigate({ routeName: 'screenB' }));
        }}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewProfile')}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>ViewProfile</Text>
        </TouchableOpacity>
        <DrawerItems {...this.props} />
      </View >
    );
  }
}
export default withNavigation(DrawerContent);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
