import { combineReducers } from "redux";
import namesReducer from './namesReducer'

export default combineReducers({
    namesArray : namesReducer
})