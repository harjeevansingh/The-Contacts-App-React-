export const FETCH_DATA = 'FETCH_EMPLOYEE_REQUEST';
export const FETCH_SUCCESS = 'FETCH_EMPLOYEE_SUCCESS';
export const FETCH_FAILURE = 'FETCH_EMPLOYEE_FAIL';


export function fetchData(){
    return({
        type: FETCH_DATA
    })
}

export function fetchSuccess(employee){    // take data from the request
    return({
        type: FETCH_SUCCESS,
        employee
    })
}

export function fetchFailure(error){
    return({
        type: FETCH_FAILURE,
        error
    })
}

