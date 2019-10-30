import React, {Component} from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from "../assets/styles";
import {View} from "react-native";
import AddPlacesToItineraryButton from '../components/AddPlaceToItineraryButton';
import PlanTripButton from "../components/PlanTripButton"

class TextBoxItineraryBuilder extends Component{

  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder='Enter Place here'
        minLength={2} // minimum length of text to search
        autoFocus={false}
        fetchDetails={true}
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          console.log(data);
          console.log(details);
        }}
        getDefaultValue={() => {
          return ''; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyAybzYaBKYlMjUPx-rjUkcSeTXSyFGOXpU',
          language: 'en', // language of the results
        }}
        styles={{
          container : styles.googleAutocompletecontainer,
          textInputContainer: styles.googleAutocompleteTextInputContainer,
          textInput: styles.googleAutocompleteTextInput,
          listView: styles.googleAutocompleteListView,
          
        }}

        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch

        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
        }}
        GooglePlacesDetailsQuery={{
            // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
            fields: ['formatted_address','geometry','place_id','photos','place_id','reviews','website','name', 'opening_hours']
        }}
        renderLeftButton = {() => <AddPlacesToItineraryButton />}
        renderRightButton = {() => <PlanTripButton/>}
      />
    );
  }
}

export default TextBoxItineraryBuilder;


