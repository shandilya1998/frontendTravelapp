import { createStackNavigator } from 'react-navigation-stack';
import CurrentItineraryScreen from "./CurrentItineraryScreen";
//import PlacesDirectoryScreen from "./PlacesDirectoryScreen";
import MoreInfoScreen from "./MoreInfoScreen";
import PlacesDirectoryScreen_v2 from './PlacesDirectoryScreen_v2';

export default createStackNavigator(
  {
      PlacesDirectoryScreen : {screen : PlacesDirectoryScreen_v2},
      CurrentItineraryScreen : {screen : CurrentItineraryScreen},
      MoreInfoScreen : {screen : MoreInfoScreen}
  },
  {
    initialRouteName : 'PlacesDirectoryScreen_v2'
    },

);

