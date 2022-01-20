import { combineReducers } from "redux";
import Auth from "./Auth";
import Products from "./Products";
import Cart from "./Cart";

export const reducers = combineReducers({ Auth, Products, Cart });
