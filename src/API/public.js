import axios from 'axios';

/*
    class to make public api calls token can be null
    private.js uses this method for authenticated calls.
*/
export default class Request {
	constructor(token = null) {
		this.token = token;
        this.headers = {
            //"X-CSRFToken": cookie.load("csrftoken"),
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "cache-control": "no-cache",
            "Authorization": token,
            }
    }

    delete = async (url, bodyParamters={}) => {
        let response = await axios.delete(url, bodyParamters, this.headers);
        return response.data;
    }

    post = async (url, bodyParamters={}) => {
        let response = await axios.post(url, bodyParamters, this.headers);
        return response.data 
    }

    get = async (url, bodyParamters={}) => {
        let response = await axios.get(url, bodyParamters, this.headers);
        return response.data
    }
    patch = async (url, bodyParamters={}) => {
        let response = await axios.patch(url, bodyParamters, this.headers);
        return response.data
    }
}