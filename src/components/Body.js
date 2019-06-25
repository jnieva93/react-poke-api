import React from "react";

import logo from ".././logo.svg";
import ".././App.css";
import { Grid } from "@material-ui/core";
import SelectPoke from "./SelectPoke";

const Body = () => {
  return (
    <Grid container spacing={0} justify="center">
      <Grid item xs={9}>
        <h1>
          <img src={logo} className="App-logo" alt="logo" /> Poke API React
          Remake
        </h1>
      </Grid>
      <Grid item xs={9}>
        <SelectPoke />
        <br />
      </Grid>
    </Grid>
  );
};

export default Body;
