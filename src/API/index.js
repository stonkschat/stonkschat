import PrivateRequest from './private';
import PublicRequest from './public';
import Cookies from "js-cookie";

//get key from cookies
export const getToken = (key) => {
    return Cookies.get(key);
};

//url lookup
const urls = {
    getUser: `/api/user/profile`,
    postComment:  `/api/comments`,
    stocks: `/api/stocks/`,
}

//private get method example
export const getUserProfile = async() => {
    const result = await new PrivateRequest().request(urls.getUser, 'get');
    return result;
};

//private post method example
export const postComment = async() => {
    const result = await new PrivateRequest().request(urls.postComment, 'post');
    return result;
};

//public get method example
export const getStocks = async() => {
    const result = await new PublicRequest().request(urls.stocks, 'get');
    return result;
};