import {FETCH_DATA, FETCH_SUCCESS, FETCH_FAILURE, fetchSuccess, fetchData, fetchFailure} from '../actions'
import {combineReducers} from 'redux';
import Axios from 'axios';

const URL = 'http://localhost:3002/clientData';

const initialState = {
    loading: false,
    employee: [],
    error: ''
}

export function fetchEmployee(){
    return (dispatch)=>{
        dispatch(fetchData());
        Axios
            .get(URL)
            .then(response=>{
                dispatch(fetchSuccess(response.data))
            })
            .catch((error)=>{
                dispatch(fetchFailure(error))
            })
    }
}




function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_DATA:
            return ({
                ...state,
                loading:true
            })
        case FETCH_SUCCESS:
            return({
                ...state,
                loading:false,
                employee:action.employee,
                error:''
            })
        case FETCH_FAILURE:
            return({
                ...state,
                loading:false,
                employee:[],
                error:action.error
            })
        default:
            return {...state}
    }
}

export default combineReducers({reducer});