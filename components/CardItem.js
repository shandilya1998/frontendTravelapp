import React ,{Component} from "react";
import styles from "../assets/styles";
import { Text, ScrollView, View, Image, Dimensions, TouchableOpacity } from "react-native";



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
            <View style = {{backgroundColor : "white", flexDirection : "column", justifyContent : "center", alignItems : "center" , flex : 1}}>
                <View style = {{flex : 2, backgroundColor : "red"}}>
                    <Image source = {require("../assets/data/images-dummy-place/EmpireState-Paidfor-Stock-Image-cropped.1506069358.6425.jpg")} resizeMode = "center" />
                </View>
                <View style = {{flex : 1 ,flexDirection : "column" ,justifyContent : "center"}}>
                    <Text>Empire State Building</Text>
                </View>
                <View style = {{flex : 1}}>
                    <Text>Tallest bulding in New York till 1970 and much more</Text>
                </View>
                <View style = {{flex : 1, flexDirection : "row", justifyContent : "space-between", alignItems : "center", marginVertical : 20, backgroundColor : "green"}}>
                    <TouchableOpacity>
                        <Image source = {require("../assets/images/icons/icons8-thumbs-down-26.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {this.props.navigation.navigate("MoreInfoScreen")}>
                        <Image source = {require("../assets/images/icons/icons8-info-26.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source = {require("../assets/images/icons/icons8-two-hearts-26.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default CardItem;
