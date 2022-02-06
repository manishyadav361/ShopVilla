import { combineReducers } from "redux";
import Auth from "./Auth";
import Products from "./Products";
import Cart from "./Cart";
import Address from "./Address";

export const reducers = combineReducers({ Auth, Products, Cart, Address });
