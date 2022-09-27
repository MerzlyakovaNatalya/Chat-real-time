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
    await auth.signInWithPopup(provider);
  };

  return (
    <>
      <Container style={{ padding: 0 }}>
        <Grid container alignItems={"center"} justify={"center"}>
          <Grid
            mt={4}
            style={{ width: 300, background: "lightgray" }}
            container
            alignItems={"center"}
            direction={"column"}
          >
            <Box p={4}>
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
