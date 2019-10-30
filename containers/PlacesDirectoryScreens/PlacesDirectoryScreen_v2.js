import React, {Component} from "react";
import { ImageBackground, 
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions, } from "react-native";
import styles from "../../assets/styles";
import Swipe from '../../components/Swipe';
import { Card, Button } from 'react-native-elements';
import ItinerarySizeIndicator from '../../components/ItinerarySizeIndicator';
import CurrentItineraryViewButton from '../../components/CurrentItineraryViewButton';
import PlacesImageCarousel from '../../components/PlaceImageCarousel';
import fetchService from '../../components/fetchBackendService'

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class PlacesDirectoryScreen_v2 extends Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return true;
    }
}

export default PlacesDirectoryScreen_v2;