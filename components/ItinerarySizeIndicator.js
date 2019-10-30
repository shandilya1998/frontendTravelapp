import React, {Component} from "react";
import styles from "../assets/styles";
import { Text, View} from "react-native";

class ItinerarySizeIndicator extends Component{
    render(){
        return (
            <View style={styles.itinerarySizeIndicatorView}>
                <Text style={styles.filtersText}>
                    Itinerary Size : {this.props.itinerarySize}
                </Text>
            </View>
        );
    }
};

export default ItinerarySizeIndicator;