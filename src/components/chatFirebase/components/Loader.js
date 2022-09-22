import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justify={"center"}
      >
        <Grid container alignItems={"center"} direction={"column"}>
          <div className="lds-hourglass">Loader</div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
