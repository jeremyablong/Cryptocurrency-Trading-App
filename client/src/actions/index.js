import { USER, LOGIN, AUTH, ADD_PAGE, GO_BACK_PAGE, SIGNOUT, GENERATE_CRYPTO_DATA, LOAD_TOKEN } from "./types.js";
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
		dispatch({
			type: "SIGNOUT", payload: res.data.user
		})
	}).catch((err) => {
		console.log(err);
	})
}
export const generateCryptoData = (data) => async dispatch => {
	await axios.get("https://api.nomics.com/v1/candles?key=561df32fa25fd3d93ae7064e0da5c8a2&interval=1h&currency=BTC&start=2019-07-18T00:00:00Z&end=2019-07-24T00:00:00Z", data).then((res) => {
		console.log(res.data)
		dispatch({
			type: "GENERATE_CRYPTO_DATA", payload: res.data
		})
	}).catch((err) => {
		console.log(err);
	})
}
export const loadUser = (data) => async dispatch => {
	await axios.post("/auth/login", data).then((res) => {
		console.log(data);
		dispatch({
			type: "LOAD_TOKEN", payload: data
		})
	}).catch((err) => {
		console.log(err);
	})
}
export const addPage = (item) => {
	return {
		type: "ADD_PAGE",
		payload: item
	}
}
export const goBackPage = (item) => {
	return {
		type: "GO_BACK_PAGE",
		payload: item
	}
}









//