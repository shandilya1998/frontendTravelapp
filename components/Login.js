import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from '../assets/styles'

class Login extends Component(){
    constructor(props){//Modify the props to take input from parent components
    super(props)
    this.state = {}
    }

    render(){
        return(
            <View style = {styles.LoginContainter}>
               <View>
                    <Text>Logo of travelapp</Text>
               </View>
               <View>
                   <View>
                        <Text> Here will be the the username login form</Text>
                   </View>
                   <View>
                        <Text> Here will be the the password login form</Text>
                   </View>
                   <View>
                        <Text> here will be the button to submit form </Text>
                   </View>
               </View>
            </View>
        );
    }
}
