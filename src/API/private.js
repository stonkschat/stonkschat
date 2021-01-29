import Cookies from "js-cookie";
import QueryString from "query-string";

const tokenName = 'token'; // name of cookies key


/*
    Two types of auth are supported.
    1. querystring passed as a body param
    2. token retireved from cookies

    not sure which one is going to be used so I included both.
    to protect against csrf we can use https://www.npmjs.com/package/fingerprintjs2 
    for browser fingerprinting that can be sent along with token.
*/
export class PrivateRequest {

    //get token and pass auth params as a querystring
    buildParams = async(params) => {
        const token = Cookies.get(tokenName);
        return QueryString.stringify({token: token, ...params});
    };

    request = async(url, type=null, params=null) => {
        const bodyParams = await this.buildParams(params);
        switch(type) {
            case 'get':
                return new Request(null).get(url, bodyParams);
            case 'post':
                return new Request(null).post(url, bodyParams);
            case 'patch':
                return new Request(null).patch(url, bodyParams);
            case 'delete':
                return new Request(null).delete(url, bodyParams);
            default:
                throw new Error('request type is a required param');
        }
    };
}