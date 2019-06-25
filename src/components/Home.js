import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import tableExample from ".././tableExample.PNG";
import cardExample from ".././cardExample.PNG";

const useStyles = makeStyles(theme => ({
  link: {
    textDecorationLine: "none"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignContent="flex-start"
      spacing={2}
    >
      <Grid item xs={12} align="center">
        <Typography variant="h1">Home Page</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h4">
          Choose a visualization type. You can switch between the two later
          using the navigation bar
        </Typography>
      </Grid>

      <Grid container spacing={5} alignContent="flex-start" justify="center">
        <Grid item xs={4}>
          <Link to="/table" className={classes.link}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={tableExample} alt="" />
                <CardContent>
                  <Typography align="center" color="textSecondary" gutterBottom>
                    View as a Table
                  </Typography>
                  <Typography variant="body2" component="p">
                    Pokemon data is displayed in a table. It occupies less
                    vertical space. Select this option if you are on a desktop
                    PC.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="/card" className={classes.link}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={cardExample} alt="" />
                <CardContent>
                  <Typography align="center" color="textSecondary" gutterBottom>
                    View as a Card
                  </Typography>
                  <Typography variant="body2" component="p">
                    Pokemon data is displayed in cards. It adapts to the screen
                    width. Select this option if you are on a mobile device.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
