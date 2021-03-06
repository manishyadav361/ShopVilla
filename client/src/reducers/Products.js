import {
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT,
  INSERT_PRODUCT,
  LIKE_POST,
  PRODUCTS_BY_SEARCH,
  START_LOADING,
  STOP_LOADING,
  UPDATE_PRODUCT,
} from "../actionTypes/actionTypes";

const initialState = {
  products: null,
  searchProducts: null,
  product: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        product: null,
        loading: false,
        error: "",
      };
    case PRODUCTS_BY_SEARCH:
      return {
        ...state,
        searchProducts: action.payload,
        loading: false,
        error: null,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: "",
      };
    case INSERT_PRODUCT:
      state?.products?.push(action?.payload);

      return {
        ...state,
        loading: false,
        error: "",
      };
    case DELETE_PRODUCT:
      const updatedProducts = state.products?.filter(
        (product) => product?._id !== action?.payload
      );
      console.log(updatedProducts);
      return {
        ...state,
        products: updatedProducts,
        loading: false,
        error: "",
      };
    case UPDATE_PRODUCT:
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
    case LIKE_POST:
      const like = action.payload?.like;
      return {
        ...state,
        product: {
          ...state?.product,
          like: like,
          likeCount: action.payload?.likeCount,
        },
      };
    default:
      return state;
  }
};

export default reducer;
