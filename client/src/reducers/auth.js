import { AUTH, SIGNOUT, LOAD_TOKEN } from "../actions/types.js";

const initialState = {
	token: localStorage.getItem("token")
}

export default (state = initialState, action) => {
	switch (action.type) {
		case AUTH: 
			return {
				...state,
				data: action.email
			}
		case LOAD_TOKEN: {
			return {
				...state,
				token: action.payload
			}
		}
		case SIGNOUT: 
			return {
				...state,
				data: action.payload
			}
		default: 
			return state;
	}
}