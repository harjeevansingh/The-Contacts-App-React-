import {FETCH_DATA, FETCH_SUCCESS, FETCH_FAILURE, fetchSuccess, fetchData, fetchFailure} from '../actions'
import {combineReducer} from 'react-redux';
import Axios from 'axios';

const URL = 'http://localhost:3002/clientData';

const initialState = {
    loading: false,
    employee: [],
    error: ''
}

function fetchEmployee(){
    return (dispatch)=>{
        dispatch(fetchData);
        Axios
            .get(URL)
            .then(emp=>{
                dispatch(fetchSuccess(emp))
            })
            .catch(error=>{
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

export default combineReducer({reducer});