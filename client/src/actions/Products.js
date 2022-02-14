import {
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT,
  INSERT_PRODUCT,
  PRODUCTS_BY_SEARCH,
  START_LOADING,
  STOP_LOADING,
  UPDATE_PRODUCT,
} from "../actionTypes/actionTypes";
import * as api from "../Api/index";

// get all products
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getProducts();
    dispatch({ type: GET_ALL_PRODUCTS, payload: data.products });
  } catch (error) {
    dispatch({ type: STOP_LOADING });
    // console.log(error);
  }
};

// get a single product
export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getProduct(id);
    dispatch({ type: GET_PRODUCT, payload: data.product });
  } catch (error) {
    dispatch({ type: STOP_LOADING });
    // console.log(error);
  }
};

// get all the products by search
export const getProductsBySearch = (searchString) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.getProductsBySearch(searchString);
    dispatch({ type: PRODUCTS_BY_SEARCH, payload: data.products });
  } catch (error) {
    dispatch({ type: STOP_LOADING });
    alert(error.response.data);
  }
};

// insert a new product for admins
export const insertProduct = (formData, id) => async (dispatch) => {
  try {
    const { data } = await api.insertProduct(formData, id);
    dispatch({ type: INSERT_PRODUCT, payload: data.product });
  } catch (error) {
    dispatch({ type: STOP_LOADING });
  }
};

// delete a  product for admins
export const deleteProduct = (id, imageToUpdate) => async (dispatch) => {
  try {
    await api.deleteProduct(id, imageToUpdate);
    dispatch({ type: DELETE_PRODUCT, payload: id });
  } catch (error) {
    dispatch({ type: STOP_LOADING });
    // console.log(error);
  }
};

// update a product for admins
export const updateProduct = (formData, id) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(formData, id);
    dispatch({ type: UPDATE_PRODUCT, payload: data?.product });
  } catch (error) {
    dispatch({ type: STOP_LOADING });
    // console.log(error);
  }
};
