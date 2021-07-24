import searchHistoryService from "../services/search.history.service";
import {
    GET_ALL_HISTORY_SUCCESS,
    GET_ALL_HISTORY_FAIL,
} from '../types/search.history.types';

export const getAllSearchHistory = () => (dispatch) => {
    return searchHistoryService.getAllSearchHistory().then(
        (response) => {
            dispatch({
                type: GET_ALL_HISTORY_SUCCESS,
                payload: response.data
            });
           // return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: GET_ALL_HISTORY_FAIL,
                payload: error.response.data
            });
            //return Promise.reject();
        }
    );
};