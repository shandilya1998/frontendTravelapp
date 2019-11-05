import { createStackNavigator } from 'react-navigation-stack';
import CurrentItineraryScreen from "./CurrentItineraryScreen";
import PlacesDirectoryScreen from "./PlacesDirectoryScreen";
import MoreInfoScreen from "./MoreInfoScreen";


export default createStackNavigator(
  {
      PlacesDirectoryScreen : {screen : PlacesDirectoryScreen},
      CurrentItineraryScreen : {screen : CurrentItineraryScreen},
      MoreInfoScreen : {screen : MoreInfoScreen}
  },
  {
    initialRouteParams : 'PlacesDirectoryScreen'
    },

);

