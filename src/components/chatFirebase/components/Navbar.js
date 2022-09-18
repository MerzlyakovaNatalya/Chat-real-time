import React, { useContext } from "react";
import { Context } from "../../../App";
import { useAuthState } from "react-firebase-hooks/auth";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <AppBar color={"inherit"} position="static">
      <Toolbar variant={"dense"}>
        <Grid container justify={"flex-end"}>
          {user ? (
            <Button onClick={() => auth.signOut()} variant={"outlined"}>
              Выйти
            </Button>
          ) : (
            <Link to="/chatFirebase">
              <Button variant={"outlined"}>Логин</Button>
            </Link>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
