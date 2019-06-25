import React from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import gitIconDark from "../resources/./GitHub-Mark-32px.png";
import pokeApiIcon from "../resources/./PokeApiLogo.png";

const useStyles = makeStyles(theme => ({
  icons: {
    marginLeft: "auto"
  },
  pokeApiIcon: {
    height: "32px",
    width: "74px"
  }
}));

const BarIcons = () => {
  const classes = useStyles();

  return (
    <div className={classes.icons}>
      <a
        href="https://github.com/jnieva93/react-poke-api"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton color="inherit" edge="end">
          <img src={gitIconDark} alt="" />
        </IconButton>
      </a>
      <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
        <IconButton color="inherit" edge="end">
          <img className={classes.pokeApiIcon} src={pokeApiIcon} alt="" />
        </IconButton>
      </a>
    </div>
  );
};

export default BarIcons;
