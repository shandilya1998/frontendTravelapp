import MapView from 'react-native-maps';
import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../assets/styles';

class Map extends Component{
	constructor(props){
		super(props);
		this.state = {
			initialRegion : {}
		};
	}

	render(){
		return(
			<View>
				<MapView
					initialRegion : this.state.initialRegion
				/>
			</View>
		);
	}
}

export default Map;
