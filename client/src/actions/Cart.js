import * as api from "../Api/index";

export const getCart = () => async (dispatch) => {
  try {
    const { data } = await api.getCart();
    dispatch({ type: "GET_CART", payload: data.cart });
  } catch (error) {
    console.log(error);
  }
};

export const createCart = (productId, price) => async (dispatch) => {
  try {
    const { data } = await api.createCart(productId, price);
    dispatch({ type: "CREATE_CART", payload: data.cart });
  } catch (error) {
    console.log(error);
  }
};

export const removeProduct = (productId, price) => async (dispatch) => {
  try {
    const { data } = await api.removeCart(productId, price);
    dispatch({ type: "REMOVE_PRODUCT", payload: data.cart });
  } catch (error) {}
};
