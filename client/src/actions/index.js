import { USER, LOGIN, AUTH, SIGNOUT, GENERATE_CRYPTO_DATA } from "./types.js";
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
	await axios.get("https://api.nomics.com/v1/currencies/ticker?key=561df32fa25fd3d93ae7064e0da5c8a2&ids=BTC,ETH,XRP&interval=1d, 7d, 30d", data).then((res) => {
		console.log(res.data)
		dispatch({
			type: "GENERATE_CRYPTO_DATA", payload: res.data
		})
	}).catch((err) => {
		console.log(err);
	})
}