const reducer = (
  state = { products: null, loading: false, error: null },
  action
) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: "",
      };
    case "INSERT_PRODUCT":
      state?.products?.push(action?.payload);

      return {
        ...state,
        loading: false,
        error: "",
      };
    case "DELETE_PRODUCT":
      const updatedProducts = state.products?.filter(
        (product) => product?._id !== action?.payload._id
      );
      return {
        ...state,
        products: updatedProducts,
        loading: false,
        error: "",
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        loading: false,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;