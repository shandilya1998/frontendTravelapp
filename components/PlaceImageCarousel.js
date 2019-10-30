import React, {Component} from 'react';
import {View, 
  TouchableOpacity} from 'react-native';
import styles from '../assets/styles'

class PlaceImageCarousel extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View>
        <Image
          source = {require('../assets/images/Statue_of_Liberty_7.jpg')}>
            <View style = {styles.buttonViewWithinImage}>
              <TouchableOpacity>
                <Image source = {require('../assets/images/icons/icons8-back-arrow-30.png')}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source = {require('../assets/images/icons/icons8-next-arrow-30.png')}/>
              </TouchableOpacity>
            </View>
        </Image>
      </View>);
  }
}

export default PlaceImageCarousel;