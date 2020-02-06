import React from "react";
import {fetchPlacePending, fetchPlaceSuccess, fetchPlaceError} from '../actions/actions_v1';

class fetchService {

    async  getData() {
        let response = await fetch('https://127:0.0.1:5000/' + this.props['endpoint'], this.parseRequest(this.props));
        return response;
    }

    parseRequest(params){       
        delete params.endpoint;
	method = params.defaultMethod
	delete params.defaultMethod;
        params['method'] = params['method'] ? params['methods'] : method;
        return params;
    }
}

export function fetchPlace(idplace){
	return dispatch => {
		dispatch(fetchPlacePending());
		props = {
			'endpoint' : '/getPlace/',
			'method' :'GET', 
			'idplace' : idplace
		};
		service = fetchService(props);
		service.getData()
		.then(res => res.json())
		.then(res => {
			if(res.error){
				throw(res.error);
			} 
			dispatch(fetchPlaceError(error));
			return res.place;
		})
		.catch(error => {
			dispatch(fetchPlaceError(error));
		})
	}
}

export default fetchService;
