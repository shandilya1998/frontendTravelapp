import React, {Component} from 'react'


export const FETCH_PLACES_PENDNIG = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PLACES_SUCCESS = 'FETCH_PLACES_SUCCESS';
export const FETCH_PLACES_ERROR = 'FETCH_PLACES_ERROR';

function fetchPlacesPendning(){
	return({
		type : FETCH_PLACES_PENDING
	});
}

function fetchPlacesSuccess(places){
	returnn({
		type : FETCH_PLACES_SUCCESS,
		places : places
	});
}

function fetchPlacesError(error){
	return({
		type : FETCH_PLACES_ERROR,
		error : error
	});
}


