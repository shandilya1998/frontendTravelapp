import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Slider } from 'react-native';
import PropTypes from 'prop-types';

class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    get image () {
        const { data: { source }} = this.props;

        return(
            <Image
              source={source}
            />
        );
    }

    render () {
        return (
                <View>
                    { this.image }
                </View>
        );
    }
}

export default  SliderEntry;