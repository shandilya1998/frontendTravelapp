import React, {Component} from "react";
import styles from "../assets/styles";
import { Text, TouchableOpacity } from "react-native";

class CurrentItineraryViewButton extends Component{
    render(){
        return (
            <TouchableOpacity style={styles.currentItineraryButtonView} onPress = {() => this.props.navigation.navigate('CurrentItineraryScreen')}>
                <Text style={styles.filtersText}>Itinerary</Text>
            </TouchableOpacity>
        );
    }
};

export default CurrentItineraryViewButton;