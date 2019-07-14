import { USER, LOGIN, AUTH, SIGNOUT } from "./types.js";
import axios from "axios";
// Register user
export const registerUser = (item) => async dispatch => {
	return {
		type: "USER",
		payload: item
	}
};
// Login user
export const loginUser = (data) => async dispatch => {
	axios.post("/auth/login", data).then((res) => {
		dispatch({
			type: "LOGIN", email: res.data.user
		})
	}).catch((err) => {
		console.log(err);
	})
}
export const auth = (data) => async dispatch => {
	axios.post("/auth/login", data).then((res) => {
		dispatch({
			type: "AUTH", email: res.data.user
		})
	}).catch((err) => {
		console.log(err);
	})
}
export const signOut = (data) => async dispatch => {
	axios.get("/auth/logout", data).then((res) => {
		console.log(res.data)
		dispatch({
			type: "SIGNOUT", payload: res.data.user
		})
	}).catch((err) => {
		console.log(err);
	})
}