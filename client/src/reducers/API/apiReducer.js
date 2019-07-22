import { GENERATE_CRYPTO_DATA } from "../../actions/types.js";

export default (state = {}, action) => {
	switch (action.type) {
		case GENERATE_CRYPTO_DATA: 
			return {
				...state,
				data: action.payload
			}
		default: 
			return state;
	}
}