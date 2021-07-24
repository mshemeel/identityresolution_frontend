import { combineReducers } from "redux";
import userReducer from "./user.profile.reducer";
import searchHistoryReducer from "./search.history.reducer";

export default combineReducers({
  userReducer,
  searchHistoryReducer
});
