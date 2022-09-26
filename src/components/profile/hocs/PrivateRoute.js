import React from "react";
import { Navigate } from "react-router-dom";
import { SignUp } from "../SignUp";
import { useSelector } from "react-redux";

export function PrivateRoute(Component) {
  const auth = useSelector((state) => state.user !== null);
  return auth ? (
    <Component path="/signup" element={<SignUp />} />
  ) : (
    <Navigate to="/login" replace={true} />
  );
  {
    /*return (props) => {
    return auth ? (
      <Component path="/signup" element={<SignUp />} />
    ) : (
      <Navigate to="/login" replace={true} />
    );
  };*/
  }
}
