import React, {Component} from "react";
import {Text, View} from "react-native";
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
                <Text>Current Itinerary Screen</Text>
            </View>
        );
    }
}

export default CurrentItineraryScreen