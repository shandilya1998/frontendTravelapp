import React, {Component} from "react";
import {View, Text} from "react-native";
import styles from "../../assets/styles";
import data from "../../assets/data/data";

class MoreInfoScreen extends Component{

    constructor(props){
        super(props);
        this.state = {placeDetails : {},};
        this.getPlaceDetails = this.getPlaceDetails.bind(this);
    }

    static navigationOptions = ({ navigation }) => ({
        title : 'TRAVEL APP',
        headerStyle : styles.appTitle,
        headerTitleStyle : styles.appTitleText,
        headerRight:<View></View>,
      });

    async getPlaceDetails(){
        let response = await fetch();
        this.setState({})
    }
      
    render(){
        return(
            <View>
                <Text>More information about the place here</Text>
            </View>
        );
    }
}

export default MoreInfoScreen;