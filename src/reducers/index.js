import { combineReducers } from 'redux';
import data from './search';
import filter from './filter';

export default combineReducers({ data, filter });
