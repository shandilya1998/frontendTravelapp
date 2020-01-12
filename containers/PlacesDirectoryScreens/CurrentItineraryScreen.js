import React, {Component} from "react";
import {Text, View, FlatList} from "react-native";
import styles from "../../assets/styles"

class CurrentItineraryScreen extends Component{

    static navigationOptions = ({ navigation }) => ({
        title : 'TRAVEL APP',
        headerStyle : styles.appTitle,
        headerTitleStyle : styles.appTitleText,
        headerRight:<View></View>, 
      });
    
    render(){
        return(
            <View>
                <FlatList data = this.props.currentItinerary/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
	const {currentItinerary} = state;
	return {currentItinerary};
};

export default connect(mapStateToProps)(CurrentItineraryScreen);
