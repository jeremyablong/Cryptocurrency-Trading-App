import { USER } from "../actions/types.js";

export default (state = {}, action) => {
	switch (action.type) {
		case USER: 
			return {
				...state,
				data: action.payload
			}
		default: 
			return state;
	}
}