import * as api from "../Api/index";

export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts();
    dispatch({ type: "GET_ALL_PRODUCTS", payload: data.products });
  } catch (error) {
    console.log(error);
  }
};

export const insertProduct = (formData, id) => async (dispatch) => {
  try {
    const { data } = await api.insertProduct(formData, id);
    dispatch({ type: "INSERT_PRODUCT", payload: data.product });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteProduct(id);
    dispatch({ type: "DELETE_PRODUCT", payload: data.product });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (formData, id) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(formData, id);
    dispatch({ type: "UPDATE_PRODUCT", payload: data?.product });
  } catch (error) {
    console.log(error);
  }
};
