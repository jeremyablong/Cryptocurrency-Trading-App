import { GO_BACK_PAGE, ADD_PAGE } from "../../actions/types.js";

const initialState = {
	count: 0
}

export default (state = {}, action) => {
	switch (action.type) {
		case ADD_PAGE: 
			return {
				...state,
				pages: state.count + 1
			}
		case GO_BACK_PAGE: 
			return {
				...state,
				pages: state.count - 1
			}
		default: 
			return state;
	}
}