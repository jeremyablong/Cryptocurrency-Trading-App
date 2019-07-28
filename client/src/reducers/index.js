import { combineReducers } from "redux";
import register from "./register.js";
import authorize from "./auth.js";
import apiReducer from "./API/apiReducer.js";
import { reducer as formReducer } from "redux-form";
import pagesReducer from "./redux-form/form.js";


export default combineReducers({
	register,
	authorize,
	apiReducer,
	form: formReducer,
	pages: pagesReducer
})