import getJWToken from './authentication';
import { SEARCH_ENDPOINT, RESULTS_PER_PAGE } from './config';

/**
 * fetchData
 * Get JWT token and send search request to server 
 * @param {string} query - search query
 * @param {boolean} [initial=false] - determine if request is initial 
 * @return {Object} - search results
 */
async function fetchData(query, initial = true) {
    if (!query) return null;
    let token = await getJWToken();
    let results = await searchData(token, query, initial);

    return results;
}

/**
 * searchData
 * Sends provided query to server to fetch data
 * For initial query use string template, for next/prev requests use full query
 * @param {string} token
 * @param {string} query - search query
 * @param {boolean} initial - determine if request is initial 
 * @return {Object} - search results
 */
const searchData = (token, query, initial) => {
    let search = initial
        ? `${SEARCH_ENDPOINT}?query=${query}&type=question&group_duplicates=question&page_size=${RESULTS_PER_PAGE}&page=1`
        : query;

    return fetch(search, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.json())
        .catch(e => console.log(e)); // eslint-disable-line
};

/**
 * navigatePage
 * Request next/prev page for current search results
 * @param {string} query - full query url 
 * @return {Object} - next/prev page for current search results
 */
const navigatePage = query => fetchData(query, false);

export {
    fetchData,
    navigatePage,
};