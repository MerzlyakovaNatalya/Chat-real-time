import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes } from "../router";
import { publicRoutes } from "../router";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../../App";

export const ChatRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} index element={Component} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} index element={Component} />
      ))}
    </Routes>
  );
};
