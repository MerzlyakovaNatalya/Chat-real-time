import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

export const ProfileRoute = () => {

  return (
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  ) 
    
};
