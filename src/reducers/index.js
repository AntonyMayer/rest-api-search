import { combineReducers } from 'redux';
import count from './search';
import filter from './filter';

export default combineReducers({ count, filter });
