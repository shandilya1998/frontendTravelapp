import React, {Component} from "react";
import styles from "../assets/styles";

import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";

class City extends Component
{
    render()
    {
        return (
            <TouchableOpacity style={styles.city}>
                <Text style={styles.cityText}>
                    <Icon name="marker" /> New York
                </Text>
            </TouchableOpacity>
        );
    }
}
export default City;
