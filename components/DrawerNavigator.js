import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';

// Components Import
import HomeComponent from './Home';
import SettingsComponent from './Settings';
import ViewProfileComponent from './ViewProfile';

export default DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeComponent,
    Settings: SettingsComponent,
    ViewProfile: ViewProfileComponent,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);
