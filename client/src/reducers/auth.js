import { AUTH, SIGNOUT } from "../actions/types.js";

export default (state = {}, action) => {
	switch (action.type) {
		case AUTH: 
			return {
				...state,
				data: action.email
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