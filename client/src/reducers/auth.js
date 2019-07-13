import { AUTH } from "../actions/types.js";

export default (state = {}, action) => {
	switch (action.type) {
		case AUTH: 
			return {
				...state,
				data: action.email
			}
		default: 
			return state;
	}
}