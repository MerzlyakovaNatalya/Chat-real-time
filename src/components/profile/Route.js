import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./hocs";
import { initAuthAction } from "../../store/profile/action";
import { getIsAuth } from "../../store/profile/selector";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { Profile } from "../profile/index";
import { profileReducer } from "../../store/profile/reducer";
import { LOGIN_USER } from "../../store/profile/action";

export const ProfileRoute = () => {
  const isAuth = useSelector((state) => state.user !== null);
  const dispatch = useDispatch();

  console.log(isAuth);

  useEffect(() => {
    dispatch(initAuthAction);
  }, []);

  return !isAuth ? (
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
  {
    /*<Routes>
        <Route path="/login" element={<PublicRoute />} />
        <Route path="/signup" element={<PrivateRoute />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>*/
  }
};
