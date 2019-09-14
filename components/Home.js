import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { createStackNavigator } from 'react-navigation';

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'VOD App',
      headerTitleStyle: {
        marginLeft: 0,
        paddingLeft: 0
      },
      headerLeft: (
        <TouchableOpacity
          onPress={navigation.openDrawer}
          style={{ marginLeft: 10 }}
        >
          <MaterialIcons name="menu" size={30} color="#111" />
        </TouchableOpacity>
      )

    }
  };
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => true)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to VODApp</Text>
      </View>
    );
  }
}

export default createStackNavigator(
  {
    Home: Home
  }, {
  //to hide label of home in drawer
  navigationOptions: {
    drawerLabel: () => null
  }
}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

