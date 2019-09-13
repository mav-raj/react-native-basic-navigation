import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Components import
import BottomTabNavigatorComponent from './BottomTabNavigator';

export default class Main extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return <MainContainer />
  }

}

const MainNavigator = createStackNavigator(
  {
    BottomTabNav: BottomTabNavigatorComponent
  },
  {
    // hide header if component is just a stack navigator
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const MainContainer = createAppContainer(MainNavigator);
