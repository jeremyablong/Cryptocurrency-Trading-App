import { combineReducers } from "redux";
import register from "./register.js";
import authorize from "./auth.js";
import apiReducer from "./API/apiReducer.js";


export default combineReducers({
	register,
	authorize,
	apiReducer
})