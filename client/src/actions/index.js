import { USER } from "./types.js";

export const registerUser = (item) => async dispatch => {
	return {
		type: "USER",
		payload: item
	}
};
