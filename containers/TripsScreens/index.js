import { createStackNavigator } from 'react-navigation-stack';
import TripsScreen from './TripsScreen';
import CustomItineraryBuilder from './CustomItineraryBuilder';
import PlannedTrips from './PlannedTrips';
import PreviousTrips from './PreviousTrips'
import {connect} from 'react-redux';

let TripsStackNavigator = createStackNavigator(
  {
    TripsScreen: { screen: TripsScreen },
    CustomItineraryBuilder: { screen: CustomItineraryBuilder },
    PlannedTrips : {screen : PlannedTrips},
    PreviousTrips : {screen : PreviousTrips}
  },
  {
    initialRouteParams : 'TripsScreen'
    },

);

class TripsStack extends Component{
	render(){
		return(
			<TripsStackNavigator />
		);
	}
}

const mapStateToProps = (state) => {
	const {previousTrips, plannedTrips, currentItinerary} = state
	return {previousTrips, plannedTrips, currentItineray}
};

//Documentation for connect() https://react-redux.js.org/api/connect
//The results of mapStateToProps must be a plain object, 
//which will be merged into the wrapped component’s props.
export default connect(mapStateToProps)(TripsStack);

