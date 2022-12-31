import React, { useEffect, useReducer } from 'react';
import axios from "axios";

const ACTIONS = {
API_REQUEST:"api-request",
FETCH_DATA : "fetch-data",
ERROR : "error"
}

//initial state

const initialState = {
data:[],
error : null,
isLoading : false
}

//Define reducer
const reducer = (state,{type,payload}) => {
    console.log(payload,"PAYLOAD");
 switch(type) {
    case ACTIONS.API_REQUEST:
        return {...state, data:[] , isLoading:true};
        case ACTIONS.FETCH_DATA:
            return {...state, data : payload.data ,isLoading : false};
            case ACTIONS.ERROR:
                return {...state , data: [] , error: payload}
    default:
        return state
 }
}

const useFetch = (url) => {
const [state,dispatch] = useReducer(reducer , initialState);

useEffect(() => {

    //Dispatch the api url first
    dispatch({type:ACTIONS.API_REQUEST});
    axios
    .get(url)
    .then((res) => {
      dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data });
    })
    .catch((e) => {
      dispatch({ type: ACTIONS.ERROR, payload: e.error });
    });
},[url])
return state;
}

export default useFetch