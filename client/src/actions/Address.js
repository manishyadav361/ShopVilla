import * as api from "../Api/index";

export const getAddress = (form) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.getAddress(form);
    dispatch({ type: "GET_ADDRESS", payload: data?.address });
  } catch (error) {
    dispatch({ type: "STOP_LOADING" });
    console.log(error);
  }
};

export const addAddress = (form) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.addAddress(form);
    dispatch({ type: "ADD_ADDRESS", payload: data?.address });
  } catch (error) {
    dispatch({ type: "STOP_LOADING" });
    console.log(error);
  }
};

export const updateAddress = (form) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.updateAddress(form);
    dispatch({ type: "UPDATE_ADDRESS", payload: data?.address });
  } catch (error) {
    dispatch({ type: "STOP_LOADING" });
    console.log(error);
  }
};
