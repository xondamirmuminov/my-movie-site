import * as actionTypes from "../actionTypes";

const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, action) => {
  if (action.type === actionTypes.LOADING) {
    return {
      ...state,
      loading: action.payload,
    };
  } else {
    return state;
  }
};

export default loadingReducer;
