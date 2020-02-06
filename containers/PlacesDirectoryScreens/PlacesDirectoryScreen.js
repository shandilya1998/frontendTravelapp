import React, {Component} from "react";
import { ImageBackground, 
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions, } from "react-native";
import styles from "../../assets/styles";
import Swipe from '../../components/Swipe';
import { Card, Button } from 'react-native-elements';
import ItinerarySizeIndicator from '../../components/ItinerarySizeIndicator';
import CurrentItineraryViewButton from '../../components/CurrentItineraryViewButton';
import PlacesImageCarousel from '../../components/PlaceImageCarousel';
import fetchService from '../../components/fetchBackendService';
import CardItem from '../../components/CardItem';
import {connect} from 'react-redux';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


// Taken from the tutorial at this link - https://scotch.io/tutorials/implementing-an-infinite-scroll-list-in-react-native
// Need to correct the navigation issue due to which the info page opens first.

class PlacesDirectoryScreen_v2 extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : [],
            page : 1,
            loading : true,
            error : null
        };
        this.service = new fetchService
    }

    componentDidMount(){
        this._fetchAllPlaces();
    }

    _fetchAllPlaces = () => {
        const { page } = this.state;
        const URL = '/load?page=${page}&per_page=10&filter={%27city%27%3A%27New%20York%27}';
        this.service.getData().then(response => {
            this.setState((prevState, nextProps) => ({
              data:
                page === 1
                  ? Array.from(response.data)
                  : [...this.state.data, ...response.data],
              loading: false
            }));
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
    }

    _handleLoadMore = () => {
        this.setState(
            (prevState, nextProps) => ({
                page: prevState.page + 1,
                loadingMore: true
            }),
            () => {
                this._fetchAllPlaces();
            }
        );
      };

    static navigationOptions = ({ navigation }) => ({
        title : 'TRAVEL APP',
        headerStyle : styles.appTitle,
        headerTitleStyle : styles.appTitleText,
        
      });

    // when the backend is ready put the JSX in infinite scroll in place of the cardItem here 
    render(){
        return (
            <CardItem navigation = {this.props.navigation} />
        );
    }
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps)(PlacesDirectoryScreen_v2);
