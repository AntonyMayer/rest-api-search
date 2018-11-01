import getJWToken from './authentication';
import { search_endpoint } from './config';

/**
 * getData
 * Get JWT token and send search request to server 
 * @param {string} query - search query
 * @return {Object} - search results
 */
async function getData(query = 'test') {
    let token = await getJWToken();
    let results = await sendQuery(token, query);

    return results;
}

/**
 * sendQuery
 * Sends provided query to retrieve data
 * @param {string} token
 * @param {string} query - search query
 */
const sendQuery = (token, query) => fetch(`${search_endpoint}?query=${query}&type=question&group_duplicates=question&page_size=25&page=1`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
}).then(response => response.json())
  .catch(e => console.log(e)); // eslint-disable-line

export default getData;