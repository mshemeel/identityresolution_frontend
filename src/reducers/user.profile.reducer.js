import {
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL
} from "../types/user.action.types";

const initialState = {
  content: "",
  userDetails: [],
  listUserSuccess: false,
  message : ""
};


const userReducer = (state = initialState, action) => {
  const { type, payload } = action; 
  switch (type) {

    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        userDetails: payload,
        listUserSuccess: true
      };
    case GET_ALL_USERS_FAIL:
      return {
        ...state,message:payload.message,
        listUserSuccess: false
      }
    default:
      return state;
  }
}

export default userReducer;