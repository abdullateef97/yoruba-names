import {Actions} from 'react-native-router-flux'
import {getNamesAsync, setNamesAsync, getPageAsync, setPageAsync} from '../api/asyncApi'
import {fetch_page, fetch_page_fail} from './types'

export const fetchPage = () => {
    return (dispatch) => {
        return getPageAsync().then(page => dispatch({
            type :fetch_page,
            payload : page
        })).catch(err => dispatch({
            type : fetch_page_fail,
            payload :err
        }))
    }
}