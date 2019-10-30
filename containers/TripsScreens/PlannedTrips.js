import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import styles from '../../assets/styles';

class PlannedTrips extends Component {
  
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
          <View>
            <Text>Planned Trips</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default PlannedTrips;

