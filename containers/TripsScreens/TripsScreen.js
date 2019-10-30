import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from '../../assets/styles';

class TripsScreen extends Component {
  
  constructor(props) {
    super(props);
    this.props.navigation.navigate = this.props.navigation.navigate.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    title : 'TRAVEL APP',
    headerStyle : styles.appTitle,
    headerTitleStyle : styles.appTitleText,
  });

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/bg.png')}
        style={styles.bg}>
        <View style={styles.tripScreen}>
          <View style={styles.tripScreenOptionsView}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CustomItineraryBuilder')}
              style={styles.tripScreenOptionButton}>
              <View>
                <Text style={styles.tripScreenOptionText}>Build an itinerary</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PlannedTrips')}
              style={styles.tripScreenOptionButton}>
              <View>
                <Text style={styles.tripScreenOptionText}>Planned Trips</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PreviousTrips')}
              style={styles.tripScreenOptionButton}>
              <View>
                <Text style={styles.tripScreenOptionText}>Previous Trips</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default TripsScreen;

