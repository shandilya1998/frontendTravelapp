import React, {Component} from "react";
import {TouchableOpacity,Image, View} from "react-native";
import styles from "../assets/styles"

class AddPlaceToItineraryButton extends Component{

  render(){
    return(
      <TouchableOpacity style = {styles.addPlaceToItineraryButtonIcon}>
        <Image source = {require("../assets/images/icons/add-place-to-itinerary-button-icon.png")}/>
      </TouchableOpacity>
    );
  }
}

export default AddPlaceToItineraryButton;