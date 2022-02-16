import {
  SIGNIN,
  START_LOADING,
  STOP_LOADING,
} from "../actionTypes/actionTypes";
import * as api from "../Api/index";

// signin the user
export const signIn = (formData, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.signIn(formData);
    dispatch({ type: SIGNIN, payload: data });
    history("/products");
  } catch (error) {
    dispatch({ type: SIGNIN, error: error?.response?.data });
    dispatch({ type: STOP_LOADING });
    history("/auth");
  }
};

// signup the user
export const signUp = (data) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { result } = await api.signUp(data);
    dispatch({ type: SIGNIN, payload: result });
  } catch (error) {
    dispatch({ type: SIGNIN, error: error.response.data });
    dispatch({ type: STOP_LOADING });
  }
};

// update the user profile
export const updateUser = (updatedData, id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateUser(updatedData, id);
    dispatch({ type: SIGNIN, payload: data });
  } catch (error) {
    dispatch({ type: STOP_LOADING });
    dispatch({ type: SIGNIN, error: error?.response?.data });
    navigate("/auth");
  }
};
