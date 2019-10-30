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

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;



class PlacesDirectoryScreen extends Component{

  constructor(props){
    super(props);
    this.showPlaceDetails = this.showPlaceDetails.bind(this);
    this.state = {
      likedPlaces: 0,
      place_queue : [],
      photo_photo_list : [],
      photoreferences : ''
    }

    this.handleLikedPlaces = () => {
      this.setState(({ likedPlaces }) => ({
        likedPlaces: likedPlaces + 1,
      }));
      place_new = this.getPlace();
      
      place_queue = this.state.place_queue.slice(1,);
      place_queue.push(place_new);
      photoreferences = place_queue[0]['photo']
      this.setState({
        place_queue : place_queue,
        photoreferences : photoreferences
      });
    };

    this.handleUnLikedPlaces = () => {
      place_queue = this.state.place_queue.slice(1,);
      place_new = this.getPlace();
      place_queue.push(place_new);
      photoreferences = place_queue[0]['photo']
      this.setState({
        place_queue : place_queue,
        photoreferences : photoreferences
      });
    };

    this.maxwidth = 0.9*SCREEN_WIDTH;
    this.getPlacesFirstTime = this.getPlacesFirstTime.bind(this);
    this.getPlace = this.getPlace.bind(this);
    this.getPlacePhotos = this.getPlacePhotos.bind(this);
  } 

  static navigationOptions = ({ navigation }) => ({
    title : 'TRAVEL APP',
    headerStyle : styles.appTitle,
    headerTitleStyle : styles.appTitleText, 
  });

  async getPlace() {
    // Function makes a request to the backend and retrieves a place from the backend to add the the places queue
    // Function is called when a card is swiped
    let response = await fetch('https://192.168.0.112:5000/getPlace');
    let place = await response.json();
    return place;
  } 

  async getPlacesFirstTime() {
    // Function makes a request to the backend and retrieves a place from the backend to add the the places queue
    // Function is called when a card is swiped
    let response = await fetch('https://192.168.0.112:5000/getPlacesFirstTime');
    // implement an if else system to check for response ie error handling
    let place_queue = await response.json();
    this.setState({place_queue : place_queue});//This state should be updated only when the user opens the app for the first time
    // Once some places have been added to the place_list the place_list should not be reinitialized 
    // To prevent reinitialization every time the user navigates to another screen redux will be used
    // Redux implementation will be done after the app is connected with the backend so testing is easy
  }

  async getPlacePhotos(){
    // This function fetches photo for a card and details for the information page
    let response = await fetch('http://192.168.0.112:5000//getPhotos/${this.state.photoreferences}/${this.maxwidth}');
    let place_photo_list = await responce.json();
    this.setState({photo_photo_list : place_photo_list});
  }

  componentWillMount(){
    this.getPlacesFirstTime();
    this.getPlacePhotos();
  }

  showPlaceDetails(place_id){
    console.log(place_id);
    this.props.navigation.navigate('MoreInfoScreen');
  }

  renderCards(place, navigation) {
    
    return (
      <Card containerStyle = {styles.cardContainerStyle} 
            wrapperStyle = {styles.cardWrapperStyle}>
        <View style = {styles.imageCarouselViewStyle}>
          <PlacesImageCarousel />      
        </View>
        <View style = {styles.detailWrapper}>
            <Text style = {{fontSize : 20}}>{place.name}</Text>
            <Text style = {{fontSize : 18}}>{place.description}</Text>
        </View>
        <View style = {styles.cardButtonsViewStyle}>
            <TouchableOpacity>
                <Image source = {require("../../assets/images/icons/icons8-thumbs-down-26.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate('MoreInfoScreen')}>
                <Image source = {require("../../assets/images/icons/icons8-info-26.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source = {require("../../assets/images/icons/icons8-two-hearts-26.png")} />
            </TouchableOpacity>
        </View>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No More cards">
        <Button
          title="Do something"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
          onPress = {this.getPlacesFirstTime}
        />
      </Card>
    );
  };

  render() {
    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
          <View style={styles.statusStyle}>
            <ItinerarySizeIndicator itinerarySize = {this.state.likedPlaces}/>
            <CurrentItineraryViewButton navigation = {this.props.navigation}/>
          </View>
          <Swipe
            onSwipeRight={this.handleLikedPlaces}
            onSwipeLeft={this.handleUnLikedPlaces}
            keyProp="place_id"
            data = {this.state.place_queue}
            renderCard={(place, navigation) => this.renderCards(place, this.props.navigation)}
            renderNoMoreCards={this.renderNoMoreCards}
          />
        </SafeAreaView>
    );
  }
}

export default PlacesDirectoryScreen;
