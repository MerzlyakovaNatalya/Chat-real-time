import React, { useContext } from "react";
import firebase from "firebase/app";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Context } from "../../../App";

export const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <>
      <Container>
        <Grid
          container
          style={{ height: window.innerHeight - 50 }}
          alignItems={"center"}
          justify={"center"}
        >
          <Grid
            style={{ width: 400, background: "lightgray" }}
            container
            alignItems={"center"}
            direction={"column"}
          >
            <Box p={5}>
              <Button onClick={login} variant={"outlined"}>
                Войти с помощью Google
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
