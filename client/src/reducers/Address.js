import {
  ADD_ADDRESS,
  GET_ADDRESS,
  START_LOADING,
  UPDATE_ADDRESS,
} from "../actionTypes/actionTypes";

const reducer = (
  state = { address: null, error: null, loading: false },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case GET_ADDRESS:
      return {
        ...state,
        address: action.payload,
        loading: false,
        error: action?.error,
      };
    case ADD_ADDRESS:
      return {
        ...state,
        address: action.payload,
        loading: false,
        error: action?.error,
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: action.payload,
        loading: false,
        error: action?.error,
      };
    default:
      return state;
  }
};

export default reducer;
