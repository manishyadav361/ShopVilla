import {
  CREATE_CART,
  GET_CART,
  REMOVE_CART,
  REMOVE_CART_ITEM,
  STOP_LOADING,
} from "../actionTypes/actionTypes";
import * as api from "../Api/index";

// get the cart of the currently logged user
export const getCart = () => async (dispatch) => {
  try {
    const { data } = await api.getCart();
    dispatch({ type: GET_CART, payload: data.cart });
  } catch (error) {
    dispatch({ type: STOP_LOADING });

    console.log(error);
  }
};

// create a cart / pushing products in the cart products array
export const createCart = (productId, price) => async (dispatch) => {
  try {
    const { data } = await api.createCart(productId, price);
    dispatch({ type: CREATE_CART, payload: data.cart });
  } catch (error) {
    dispatch({ type: STOP_LOADING });

    console.log(error);
  }
};

// decrementing the existing cart products quantity and total
export const removeProduct = (productId, price) => async (dispatch) => {
  try {
    const { data } = await api.removeCart(productId, price);
    dispatch({ type: REMOVE_CART, payload: data.cart });
  } catch (error) {
    dispatch({ type: STOP_LOADING });

    console.log(error);
  }
};

// remove the  product  from the cart
export const removeCartItem = (productId) => async (dispatch) => {
  try {
    const { data } = await api.removeCartItem(productId);
    dispatch({ type: REMOVE_CART_ITEM, payload: data.cart });
  } catch (error) {
    dispatch({ type: STOP_LOADING });

    console.log(error);
  }
};
