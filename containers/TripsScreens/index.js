import { createStackNavigator } from 'react-navigation-stack';
import TripsScreen from './TripsScreen';
import CustomItineraryBuilder from './CustomItineraryBuilder';
import PlannedTrips from './PlannedTrips';
import PreviousTrips from './PreviousTrips'

export default createStackNavigator(
  {
    TripsScreen: { screen: TripsScreen },
    CustomItineraryBuilder: { screen: CustomItineraryBuilder },
    PlannedTrips : {screen : PlannedTrips},
    PreviousTrips : {screen : PreviousTrips}
  },
  {
    initialRouteName : 'TripsScreen'
    },

);

