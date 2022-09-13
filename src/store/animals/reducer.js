import {
  SET_ERROR_ANIMALS,
  SET_LOADING_ANIMALS,
  SET_DATA_ANIMALS,
  RESET,
} from "./action";

const initialState = {
  isError: false,
  isLoading: false,
  data: null,
};

export const animalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_ANIMALS: {
      return { ...state, isLoading: action.payload };
    }

    case SET_ERROR_ANIMALS: {
      return { ...state, isError: action.payload };
    }

    case SET_DATA_ANIMALS: {
      return { ...state, data: action.payload };
    }

    case RESET: {
      return state; //Always return the initial state
    }

    default: {
      return state;
    }
  }
};
