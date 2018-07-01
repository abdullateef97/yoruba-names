import {fetch_names, fetch_names_no_loading,
     fetch_names_start, fetch_names_fail} from './types';
import {fetchNames,search} from '../api/yoruba';
import {Actions} from 'react-native-router-flux'
import {getNamesAsync, setNamesAsync, getPageAsync, setPageAsync} from '../api/asyncApi'

export const fetch_names_action = (page) => {
    return (dispatch) => {
        fetch_start(dispatch);
        fetchNames(page).then((data) => {
            fetch_success(dispatch, data);
            setNamesAsync(data).then(() => {});
        }).catch(err => fetch_fail(dispatch,err));
    }
}

export const fetch_names_async = () => {
    return (dispatch) => {
        fetch_start(dispatch);
        getNamesAsync().then((names) => {
            fetch_success(dispatch, names)
        }).catch(err =>  fetch_fail(dispatch, err))
    }
}

export const fetch_names_refresh = (page) => {
    return (dispatch) => {
        fetchNames(page).then((data) => {
            fetch_success(dispatch, data);
            setPageAsync(page).then(() => {})
        }).catch(err => fetch_fail(dispatch,err));
    }
}

const fetch_start = dispatch => {
    dispatch({
        type : fetch_names_start
    })
}


const fetch_fail = (dispatch,err) => {
    dispatch({
        type : fetch_names_fail,
        payload : err
    })
}

export const fetch_success = (dispatch, namesArray) => {
    dispatch({
        type : fetch_names,
        payload : namesArray
    })
}

