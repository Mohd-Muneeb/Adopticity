import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const state = {
	filters: [],
	products: [],
	currentUser: {},
	cart: [],
	lastSeen: [],
	services: [],
};

const reducer = combineReducers({ productReducer });
const initialState = {};
const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

function reducerFilters(state: any, action: any) {
	switch (action.type) {
		case "ADD_FILTERS":
			break;
		case "REMOVE_FILTERS":
			break;
		case "UPDATE_FILTERS":
			break;
		default:
			return state;
	}
}
function reducerCurrentUser(state: any, action: any) {
	switch (action.type) {
		case "LOGIN_USER":
			break;
		case "LOGOUT_USER":
			break;
		default:
			return state;
	}
}

function reducerCart(state: any, action: any) {
	switch (action.type) {
		case "ADD_CART":
			break;
		case "REMOVE_CART":
			break;
		case "UPDATE_CART":
			break;
		default:
			return state;
	}
}
