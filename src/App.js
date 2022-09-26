//import logo from './logo.svg';
import React, { createContext } from "react";
import "./App.css";
import { Router } from "./router/Router";
import styled from "styled-components";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
`;

firebase.initializeApp({
  apiKey: "AIzaSyDRJ2ULdNzSuGHU3JBwBHIoPSJ2Rn992AI",
  authDomain: "chat-firebase-831ec.firebaseapp.com",
  projectId: "chat-firebase-831ec",
  storageBucket: "chat-firebase-831ec.appspot.com",
  messagingSenderId: "441236107058",
  appId: "1:441236107058:web:51152b9251c4ca05df712b",
  measurementId: "G-LXGY5CB8D1",
});

export const Context = createContext(null);

export const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <>
      <Context.Provider
        value={{
          firebase,
          auth,
          firestore,
        }}
      >
        <AppWrapper>
          <Router />
        </AppWrapper>
      </Context.Provider>
    </>
  );
}

export default App;
