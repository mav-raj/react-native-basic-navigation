import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';


// Components Import
import DrawerNavigatorComponent from './DrawerNavigator';
import SearchComponent from './Search';
import CommunityComponent from './Community';
import WatchlistComponent from './WatchList';



const MaterialBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    DrawerNavigator: DrawerNavigatorComponent,
    Search: SearchComponent,
    Community: CommunityComponent,
    Watchlist: WatchlistComponent,
  },
  {
    initialRouteName: 'DrawerNavigator',
    barStyle: {
      backgroundColor: '#ccc'
    },
  },
);

DrawerNavigatorComponent.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => {
      return <IconFontAwesome
        name='home'
        style={{ color: tintColor }}
        size={Platform.OS === "ios" ? 28 : 20}
      />
    }
  }
}

SearchComponent.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ tintColor }) => {
    return <IconFontAwesome
      name='search'
      style={{ color: tintColor }}
      size={Platform.OS === "ios" ? 28 : 20}
    />
  }
}

CommunityComponent.navigationOptions = {
  tabBarLabel: 'Community',
  tabBarIcon: ({ tintColor }) => {
    return <IconFontAwesome
      name='list-alt'
      style={{ color: tintColor }}
      size={Platform.OS === "ios" ? 28 : 20}
    />
  }
}

WatchlistComponent.navigationOptions = {
  tabBarLabel: 'Watchlist',
  tabBarIcon: ({ tintColor }) => {
    return <IconFontAwesome
      name='list-ul'
      style={{ color: tintColor }}
      size={Platform.OS === "ios" ? 28 : 20}
    />
  }
}

const BottomTabContainer = createAppContainer(MaterialBottomTabNavigator);
export default class BottomBar extends Component {
  render() {
    return <BottomTabContainer />
  }
}
