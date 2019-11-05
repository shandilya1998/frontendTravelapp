import React ,{Component} from "react";
import styles from "../assets/styles";
import { Text, ScrollView, View, Image, Dimensions, TouchableOpacity, ImageBackground } from "react-native";



//the props passed to CardItem are the elements of the response from places API
class CardItem extends Component{
    constructor(props){
        super(props);
        }

    getImage = async (imageReference) => {
        const uri = await fetch("127.0.0.1:5000/get-image-for-reference/${imageReference}")
        return uri
    }
    //check if the images are properly returned. Check the output of the function getImage function
    render(){
        return(
            <View style = {styles.cardContainer}>
                <View styles = {styles.ImageContainer}>
                    <ImageBackground source = {{uri : this.props.image_url}} style = {styles.ImagePlaces} resizeMethod = 'auto'>
                        <View style = {{flex : 1, flexDirection : 'row', justifyContent : 'space-around', padding : 20}}>
                            <TouchableOpacity>
                                <Image source = {require("../assets/images/icons/icons8-thumbs-down-52.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {this.props.navigation.navigate("MoreInfoScreen")}>
                                <Image source = {require("../assets/images/icons/icons8-info-52.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source = {require("../assets/images/icons/icons8-two-hearts-52.png")} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style = {{flex : 0.15 ,flexDirection : "column" ,justifyContent : 'center', alignItems : 'center'}}>
                        <Text style = {{fontSize : 22}}>{this.props.name}Text here</Text>
                        <Text style = {{fontSize : 15}}>{this.props.description} Text here</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default CardItem;
