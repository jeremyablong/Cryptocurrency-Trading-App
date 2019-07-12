import allReducers from "../reducers/index.js";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, composeEnhancers(applyMiddleware(reduxThunk)));

store.subscribe(() => {
	console.log("Store is now", store.getState());
})

export default store;