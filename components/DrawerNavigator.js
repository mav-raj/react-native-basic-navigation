import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';

// Components Import
import HomeComponent from './Home';
import DrawerContent from './DrawerContent';

export default DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeComponent
  },
  {
    contentComponent: DrawerContent,
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },

);
