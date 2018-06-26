import {fetch_page, fetch_page_fail} from '../actions/types'

const InitState = {
    page :1,err : ''
}

export default (state = InitState, action) => {
    switch(action.type){
        case fetch_page:
            return {...state, page :action.payload, err : ''}
        case fetch_page_fail:
            return {...state,err : action.payload}
        default:
            return {...InitState}
    }
}