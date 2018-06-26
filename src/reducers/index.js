import { combineReducers } from "redux";
import namesReducer from './namesReducer';
import pageReducer from './pageReducer'

export default combineReducers({
    namesArray : namesReducer,
    pageObj : pageReducer
})