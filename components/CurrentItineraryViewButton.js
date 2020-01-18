import React, {Component} from "react";
import styles from "../assets/styles";
import { Text, TouchableOpacity } from "react-native";
import ItineraryList from './ItineraryList';
import fetchService from './fetchBackendService';
import {fetchPlacesPending, fetchPlacesSuccess, fetchPlacesError} from './actions_v1';

class CurrentItineraryViewButton extends Component{
    render()
	{
		return (
			<TouchableOpacity 
		    		style={styles.currentItineraryButtonView} 
		    		onPress = {() => this.props.navigation.navigate('CurrentItineraryScreen')}>
		    			<ItineraryList />
		    	</TouchableOpacity>
		);
	}
}

export default CurrentItineraryViewButton;
