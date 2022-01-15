import { combineReducers } from "redux";
import Auth from "./Auth";
import Products from "./Products";
export const reducers = combineReducers({ Auth, Products });
