import { combineReducers } from "redux";
import register from "./register.js";
import authorize from "./auth.js";


export default combineReducers({
	register,
	authorize
})