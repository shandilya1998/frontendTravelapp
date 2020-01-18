import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'; 
import TripsScreens from './containers/TripsScreens';
import ProfileScreens from './containers/ProfileScreens';
import PlacesDirectoryScreens from './containers/PlacesDirectoryScreens';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import placesReducer from './components/reducer_v1';
import actions from './components/actions_v1';

const Tab = createBottomTabNavigator({
  Trips : TripsScreens,
  Places : PlacesDirectoryScreens,
  Profile : ProfileScreens
},
{
  initialRouteParams : 'Places'
}
);

const middlewares = [thunk];

const store = createStore(placesReducer, applyMiddleWare(...middlewares));

export default class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			plannedTrips : [],
			previousTrips : [],
			currentItinearary : [],
			profile : {},
		}
	}

	render(){
		return(
			<Provider store = {store}>
				<View>
					<Tab
						plannedTrips = {this.state.plannedTrips}
						previousTrips = {this.state.previousTrips}
						currentItinerary = {this.state.currentItinerary}
						profile = {this.state.profile}
					/>
				</View>
			</Provider>
		);
	}
}

//export default createAppContainer(App);
