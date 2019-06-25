import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Fab,
  Grid
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  actionButtons: {
    justifyContent: "center",
    backgroundColor: "#4286f4"
  },
  card: {
    borderRadius: "5%"
  },
  cardMedia: {
    height: "35vh",
    borderBlockColor: "red"
  }
}));

const PokeCard = ({ pokeList, removePoke }) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" direction="row" spacing={2}>
      {pokeList.map((pokemon, i) => (
        <Grid item xs={12} sm={6} lg={3} key={i}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                image={pokemon.sprites.front_default}
                alt={pokemon.name}
                title={pokemon.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </Typography>
                <Typography variant="body2">ID: {pokemon.id}</Typography>
                <Typography variant="body2">Height: {pokemon.height}</Typography>
                <Typography variant="body2">Weight: {pokemon.weight}</Typography>
                <Typography variant="body2">
                  Base experience: {pokemon.base_experience}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.actionButtons}>
              <Fab
                size="medium"
                color="secondary"
                onClick={removePoke.bind(this, i)}
              >
                <DeleteIcon />
              </Fab>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PokeCard;
