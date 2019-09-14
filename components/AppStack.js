import { createStackNavigator } from 'react-navigation';

// AppStack Imports
import BottomTabNavigatorComponent from './BottomTabNavigator';
import SettingsComponent from './Settings';
import ViewProfileComponent from './ViewProfile';

export default createStackNavigator(
  {
    BottomTabNavigator: BottomTabNavigatorComponent,
    Settings: SettingsComponent,
    ViewProfile: ViewProfileComponent
  },
  {
    // hide header if component is just a stack navigator
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);
