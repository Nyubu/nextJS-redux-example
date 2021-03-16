import {createStore, combineReducers } from 'redux';
import homePageReducer from './redux/reducers'
import userPageReducer from './UserPage-Redux/reducer';

const reducers = combineReducers({
    homePageReducer,
    userPageReducer
})

export default createStore(reducers);