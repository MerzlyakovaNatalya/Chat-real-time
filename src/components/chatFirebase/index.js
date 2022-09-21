import { Navbar } from "./components/Navbar";
import { ChatRouter } from "./components/ChatRouter";
import React, { useContext } from "react";
import { Context } from "../../App";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./components/Loader";

export const ChatFirebase = () => {
  const { auth } = useContext(Context);
  const [loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Navbar>Navbar</Navbar>
      <ChatRouter />
    </div>
  );
};
