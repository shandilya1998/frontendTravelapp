import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Button,
} from 'react-native';
import styles from '../../assets/styles';
import TextBoxItineraryBuilder from '../../components/TextBoxItineraryBuilder';


class CustomItineraryBuilder extends Component {
  
  static navigationOptions = ({ navigation }) => ({
    title : 'TRAVEL APP',
    headerStyle : styles.appTitle,
    headerTitleStyle : styles.appTitleText,
    headerRight:<View></View>, 
   });

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/bg.png')}
        style={styles.bg}>
        <View style={styles.screen}>
          <View style = {styles.inputView}>
              <TextBoxItineraryBuilder />
          </View>
          <View style = {styles.itineraryView}>
            <Text>Itinerary</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default CustomItineraryBuilder;

