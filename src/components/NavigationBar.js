import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BarIcons from "./BarIcons";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#2196f3"
  },
  link: {
    color: "white",
    textDecorationLine: "none"
  },
  img: {
    height: "10vh",
    marginLeft: "-3vh"
  },
  title: {
    flexGrow: 1
  }
}));

const NavigationBar = ({ goto }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="sticky" color="default">
      <Toolbar>
        <Link to="/">
          <img
            className={classes.img}
            src="https://nintendowire.com/wp-content/uploads/2018/10/AnimalCrossing-PocketCamp-Eevee-Items-PokeBall.png"
            alt=""
          />
        </Link>
        <Typography className={classes.title} variant="h6" color="inherit">
          <Link
            className={classes.link}
            to={`/${goto
              .substring(0, 5)
              .toLowerCase()
              .trim()}`}
          >
            {goto}
          </Link>
        </Typography>
        <BarIcons />
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
