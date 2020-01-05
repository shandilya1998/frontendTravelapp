import React, {Component} from 'react';
import {View, TouchableOpacity, FlatList, Imagebackground} from 'react-native';
import styles from '../assets/styles'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import AddPlaceToItineraryButton from 'AddPlaceToItineraryButton';
import PlanTripButton from 'PlanTripButton';

class ItineraryList extends Component{
	constructor(props){
		super(props);
		this.state  = {
			places : [],
			inputPlace = {}
		};

	}

	componentDidMount(){
		this.setState({places : this.props.places});
	}


	function pushPlace(place){
		places = this.state.places;
		places.push(place);
		this.setState({places : places});
	}

	function FlatListItemSeparator() {
		return (
			<View style = {
				{
					height: 1,
					width: "100%",
					backgroundColor: "#607D8B"
				}
			}/>
		);
	}

	function getPlace(idplace){
		condition = (id) => { 
			if (id == idplace) {
				return true;
			} else {
				return false;
			}
		}
		t = this.state.place.filter(condition);
		return t[0];
	}

	function renderPlaceTile(name, image){
		return(
			<View>
				<ImageBackground
					style = {styles.ItineraryListTileImageContainer}
					imageStyle = {styles.ItineraryListTileImage}
					source = {require(image)}>
						<View>
							<Text style = {styles.ItineraryListTileText}>{place}</Text>
						</View>
				</ImageBackground>
			</View>
		);
	}

	function onPress(){
		
	}
	
	function renderAddPlaceToItineraryButton(){
		return(
			<TouchableOpacity style = {styles.addPlaceToItineraryButtonIcon}>
				<Image source = {require('../assets/images/icons/add-place-to-itinerary-button-icon.png')}/>
			</TouchableOpacity/>
		);
	}

	function renderPlanTripButton(){
		return(
			<TouchableOpacity style = {styles.planTripButton}>
				<Image source = {require('../assets/images/icons/plan-trip-icon.png')}/>
			</TouchableOpacity/>
		);
	}

	render(){
		return(
			<View style={styles.screen}>
                        	<View style = {styles.inputView}>
					<GooglePlacesAutocomplete
        					placeholder='Search for a place here'
        					minLength={2} 
        					autoFocus={false}
        					fetchDetails={true}
        					onPress={}
        					query={{
          						key: 'AIzaSyAybzYaBKYlMjUPx-rjUkcSeTXSyFGOXpU',
          						language: 'en'}}
        					styles={{
          						container : styles.googleAutocompletecontainer,
          						textInputContainer: styles.googleAutocompleteTextInputContainer,
          						textInput: styles.googleAutocompleteTextInput,
          						listView: styles.googleAutocompleteListView}}
						nearbyPlacesAPI='GooglePlacesSearch' 
						GooglePlacesSearchQuery={{
							rankby: 'distance',
        					}}
        					GooglePlacesDetailsQuery={{
							fields: ['formatted_address','geometry','place_id','photos','place_id','reviews','website','name', 'opening_hours']
						}}
        					renderLeftButton = {() => this.renderAddPlacesToItineraryButton}
        					renderRightButton = {() => this.renderPlanTripButton}/>
                                </View>
                        </View>
			<View style = {styles.itineraryListView}>
				<FlatList
					style = {styles.ItineraryListFlatList]
					data = this.state.places
					keyExtractor = {(item, index) => item.idplace}
					renderItem = {(rowData) = > this.renderPlaceTile(rowData)}
					ItemSeparatorComponent = {() => this.FlatListSeparator
					horizontal = this.props.horizontal}
					onEndReached = {this.props.onEndReach
					onRefresh = {this.props.onRefresh}
					/>				
			</View>
			);
	
	}
}

export default ItineraryList;


