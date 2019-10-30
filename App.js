import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'; 
import TripsScreens from './containers/TripsScreens';
import ProfileScreens from './containers/ProfileScreens';
import PlacesDirectoryScreens from './containers/PlacesDirectoryScreens';

const App = createBottomTabNavigator({
  Trips : TripsScreens,
  Places : PlacesDirectoryScreens,
  Profile : ProfileScreens
});

export default createAppContainer(App);
