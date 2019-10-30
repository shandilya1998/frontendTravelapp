import React, {Component} from "react";
import {TouchableOpacity,Image, View} from "react-native";
import styles from "../assets/styles"

class PlanTripButton extends Component{

    render(){
        return(
            <TouchableOpacity style = {styles.planTripButton} >
                <Image source = {require("../assets/images/icons/plan-trip-icon.png")}/>
            </TouchableOpacity>
        );
    }
}

export default PlanTripButton;