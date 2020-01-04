import React, {Component} from 'react'


export const FETCH_PLACE_SUCCESS = 'trvl_app_database_event_fetch_place_from_database_success';
export const FETCH_PLACE_FAILURE = 'trvl_app_database_event_fetch_place_from_database_failure';
export const FETCH_PLACE_PENDING = 'trvl_app_database_event_fetch_place_from_database_pending';

function fetchPlacesPending(){
	return({
		type : FETCH_PLACE_PENDING
	});
}

function fetchPlacesSuccess(place){
	return({
		type : FETCH_PLACE_SUCCESS,
		place : place
	});
}

function fetchPlaceError(error){
	return({
		type : FETCH_PLACE_ERROR,
		error : error
	});
}




