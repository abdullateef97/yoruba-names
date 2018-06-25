import {fetch_names, fetch_names_start, fetch_names_fail} from '../actions/types'



const InitalState = {
    names : [], err : "", loading : false
}
export default (state = InitalState, action) => {
    switch(action.type){
        case fetch_names_start : 
            return {...state, loading :true}
        case fetch_names_fail: 
            return {...state, loading :false, err: action.payload}
        case fetch_names:
            return {names :action.payload, err : '', loading :false}
        default:
            return InitalState
    }
}