import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'; 
import TripsScreens from './containers/TripsScreens';
import ProfileScreens from './containers/ProfileScreens';
import PlacesDirectoryScreens from './containers/PlacesDirectoryScreens';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './components/reducer_v1';
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

const store = createStore(reducer, applyMiddleWare(...middlewares));

export default class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Provider store = {store}>
				<View>
					<Tab/>
				</View>
			</Provider>
		);
	}
}

//export default createAppContainer(App);
