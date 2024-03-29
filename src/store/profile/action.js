import { auth } from "../../App";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUserAction = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const logoutUserAction = () => ({
  type: LOGOUT_USER,
});

export const initAuthAction = (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(loginUserAction(user));
    } else {
      dispatch(logoutUserAction());
    }
  });
};
