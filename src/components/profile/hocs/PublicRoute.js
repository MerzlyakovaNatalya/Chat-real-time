import React from "react";
import { Login } from "../Login";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function PublicRoute(Component) {
  const auth = useSelector((state) => state.user !== null);

  return (props) => {
    return !auth ? (
      <Component path="/login" element={<Login />} />
    ) : (
      <Navigate to="/profile" replace={true} />
    );
  };
}
