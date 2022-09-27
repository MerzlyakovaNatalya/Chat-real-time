import React, { useContext, useState } from "react";
import { Context } from "../../../App";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar, Button, Container, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/app";

export const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }

  if (user === null) {
    return null;
  }

  return (
    <Container style={{ padding: 0 }}>
      <Grid container justify={"center"} style={{ marginTop: 20 }}>
        <div
          style={{
            width: "100%",
            height: "60vh",
            overflowY: "auto",
            boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
          }}
        >
          {messages?.map((message, index) => (
            <div
              key={index}
              style={{
                margin: 10,
                border:
                  user.uid === message.uid
                    ? "2px solid green"
                    : "2px dashed red",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
                padding: 5,
              }}
            >
              <Grid container>
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "100%" }}
        >
          <TextField
            fullWidth
            maxRows={2}
            variant={"outlined"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="write message"
          />
          <Button onClick={sendMessage} variant={"outlined"}>
            send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
