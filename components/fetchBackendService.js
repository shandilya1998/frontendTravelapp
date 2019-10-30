import React from "react";

class fetchService{
    constructor(params){
        this.params = params; //endpoint_params is a list of all data required to perform a request
    }

    async  getData() {
        let response = await fetch('https://192.168.0.112:5000/' + this.params['endpoint'], this.parseRequest(this.params));
        return response;
    }

    parseRequest(params){       
        delete params.endpoint;
        params['method'] = params['method'] ? params['methods'] : 'POST';
        return params;
    }
}

export default fetchService;