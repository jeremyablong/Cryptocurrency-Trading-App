import { LOGIN } from "../actions/types.js";

export default (state = {}, action) => {
	switch (action.type) {
		case LOGIN: 
			return {
				...state,
				data: action.payload
			}
		default: 
			return state;
	}
}