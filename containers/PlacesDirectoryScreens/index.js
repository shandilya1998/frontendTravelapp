import { createStackNavigator } from 'react-navigation-stack';
import CurrentItineraryScreen from "./CurrentItineraryScreen";
import PlacesDirectoryScreen from "./PlacesDirectoryScreen";
import MoreInfoScreen from "./MoreInfoScreen";


let PlacesDirectoryNavigator = createStackNavigator(
  {
      PlacesDirectoryScreen : {screen : PlacesDirectoryScreen},
      CurrentItineraryScreen : {screen : CurrentItineraryScreen},
      MoreInfoScreen : {screen : MoreInfoScreen}
  },
  {
    initialRouteParams : 'PlacesDirectoryScreen'
    },

);

const mapStateToProps = (state) => {
	const {currentItinerary} = state;
	return {currentItinerary};
};

export default connect(mapStateToProps)(PlacesDirectoryNavigator);
