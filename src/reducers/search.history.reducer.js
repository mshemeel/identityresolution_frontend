import {
    GET_ALL_HISTORY_SUCCESS,
    GET_ALL_HISTORY_FAIL,
} from '../types/search.history.types';


const initialState = {
    content: "",
    history: [],
    fetchHistorySuccess: false,
    message : ""
  };

  const searchHistoryReducer = (state = initialState, action) => {
    const { type, payload } = action; 
    switch (type) {
  
      case GET_ALL_HISTORY_SUCCESS:
        return {
          ...state,
          history: payload,
          fetchHistorySuccess: true
        };
      case GET_ALL_HISTORY_FAIL:
        return {
          ...state,message:payload.message,
          fetchHistorySuccess: false
        }
      default:
        return state;
    }
  }
  
  export default searchHistoryReducer;