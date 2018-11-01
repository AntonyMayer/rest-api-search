import { auth_endpoint, master } from './config';

// Create form-data with proper credentials 
const formData = new FormData();

formData.append('username', master.username);
formData.append('password', master.password);

/**
 * getJWToken
 * Gets JSON Web Token for current session
 * First check sessionStorage, then try obtain from server
 * @return {string} - token
 */
async function getJWToken() { 
    let token = checkSessionToken();

    if (token) return token;
    else {
        token = await getNewToken();
        setSessionToken(token.JWT);
        return token.JWT;
    }
}

/**
 * getNewToken
 * Requests a new token from server
 * @return {string} - token
 */
const getNewToken = () => fetch(auth_endpoint, {
    method: 'POST',
    body: formData
}).then(response => response.json())
  .catch(e => console.log(e)); // eslint-disable-line)

/**
 * setSessionToken
 * Saves token in sessionStorage
 * @param {string} token - new token retrieved from server
 */
const setSessionToken = token => sessionStorage.setItem('jwt_token', token);

/**
 * checkSessionToken
 * Checks for existing token
 * @return {string | null} - token or null (if no token saved)
 */
const checkSessionToken = () => sessionStorage.getItem('jwt_token');

export default getJWToken;
