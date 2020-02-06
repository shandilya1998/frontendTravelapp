import React, {Component} from 'react';
import {FETCH_PLACES_PENDING, FETCH_PLACES_SUCCESS, FETCH_PLACES_ERROR} from '../actions/actions_v1';

export const intialState = {
	pending : false,
	products : [],
	error : null
};

function placesReducer(action = {}, state = initialState){
	switch(action.type){
		case FETCH_PLACES_PENDING:
			return {
				...state,
				pending : true
			};
		case FETCH_PLACES_SUCCESS:
			return {
				...state, 
				pending : false,
				places : action.payload
			};
		case FETCH_PLACES_ERROR:
			return {
				...state,
				pending : false,
				error : action.error
			};
		default:
			return {state};
	}
}

export default placesReducer;

export const getPlaces = state => state.products;
export const getPlacesPending = state => state.pending;
export const getPlacesError = state => state.error;

