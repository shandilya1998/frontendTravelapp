import React, { Component } from 'react';
import {
	Text,
	View,
	ImageBackground,
	Button} from 'react-native';
import styles from '../../assets/styles';
import TextBoxItineraryBuilder from '../../components/TextBoxItineraryBuilder';
import ItineraryList from '../../components/ItineraryList';


class CustomItineraryBuilder extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputPlace : {}
		}
	}
	
	static navigationOptions = ({ navigation }) => ({
		title : 'TRAVEL APP',
		headerStyle : styles.appTitle,
		headerTitleStyle : styles.appTitleText,
		headerRight:<View></View>});

  	render() {
    		return (
      			<ImageBackground
        			source={require('../../assets/images/bg.png')}
        			style={styles.bg}>
          				<View style = {styles.itineraryView}>
	    					<ItineraryList
							places = {this.props.places}
	    						horizontal = false
	    						onEndReached = 
	    						onRefresh = />
          				</View>
      			</ImageBackground>
		);
	}
}

export default CustomItineraryBuilder;

