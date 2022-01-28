const reducer = (
  state = {
    products: null,
    searchProducts: null,
    product: null,
    loading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        product: null,
        searchProducts: null,
        loading: false,
        error: "",
      };
    case "PRODUCTS_BY_SEARCH":
      return {
        ...state,
        searchProducts: action.payload,
        loading: false,
        error: null,
      };
    case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload,
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
      const updated = state?.products?.map((product) => {
        if (product?._id === action?.payload?._id) {
          return action.payload;
        }
        return product;
      });
      return {
        ...state,
        products: updated,
        loading: false,
        error: "",
      };
    default:
      return {
        ...state,
        product: null,
        searchProducts: null,
        loading: false,
        error: null,
      };
  }
};

export default reducer;
