import {
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
} from '../types/user.action.types';
import UserProfileService from "../services/user.profile.service"


export const fetchUserData = (email,phone,linkedin,twitter) => (dispatch) => {
    return UserProfileService.getAllUserDetails(email,phone,linkedin,twitter).then(
        (response) => {
            dispatch({
                type: GET_ALL_USERS_SUCCESS,
                payload: response.data
            });
           // return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: GET_ALL_USERS_FAIL,
                payload: error.response.data
            });
            //return Promise.reject();
        }
    );
};