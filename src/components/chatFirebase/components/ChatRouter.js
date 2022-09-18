import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes } from "../router";
import { publicRoutes } from "../router";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../../App";
import { CHAT_ROUTE } from "../utils/consts";
import { LOGIN_ROUTE } from "../utils/consts";
import { Login } from "./Login";

export const ChatRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} index element={Component} />
      ))}
      {/*<Route path="*" element={<Navigate replace to="chatFirebase" />} />*/}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} index element={Component} />
      ))}

      {/*<Route path={path} element={<Navigate replace to={LOGIN_ROUTE} />} />*/}
    </Routes>
  );
};
