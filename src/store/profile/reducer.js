import { LOGIN_USER } from "./action";
import { LOGOUT_USER } from "./action";

const initialState = {
  user: null,
  isShow: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        user: action.payload,
      };
    }
    case LOGOUT_USER: {
      return {
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};
