import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  AppBar,
  Toolbar
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import tableExample from "../resources/./tableExample.PNG";
import cardExample from "../resources/./cardExample.PNG";
import BarIcons from "./BarIcons";

const useStyles = makeStyles(theme => ({
  top: {
    width: "100%",
    marginTop: "15px"
  },
  bottom: {
    width: "100%"
  },
  subtitle: {
    marginBottom: "10px"
  },
  link: {
    textDecorationLine: "none"
  },
  appBar: {
    top: "auto",
    bottom: 0,
    marginTop: "20px",
    backgroundColor: "#2196f3"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        className={classes.top}
        container
        direction="row"
        justify="center"
        spacing={4}
      >
        <Grid item xs={12} align="center">
          <Typography variant="h2">Pokemon data comparator</Typography>
        </Grid>
        <Grid item xs={8} align="center">
          <Typography className={classes.subtitle} variant="subtitle1">
            Choose a visualization type. You can switch between the two later
            using the navigation bar
          </Typography>
        </Grid>
      </Grid>

      <Grid
        className={classes.bottom}
        container
        spacing={4}
        direction="row"
        justify="center"
      >
        <Grid item xs={8} lg={4}>
          <Paper>
            <Link to="/table" className={classes.link}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={tableExample} alt="" />
                  <CardContent>
                    <Typography
                      align="center"
                      color="textSecondary"
                      gutterBottom
                    >
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
          </Paper>
        </Grid>
        <Grid item xs={8} lg={4}>
          <Paper>
            <Link to="/card" className={classes.link}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={cardExample} alt="" />
                  <CardContent>
                    <Typography
                      align="center"
                      color="textSecondary"
                      gutterBottom
                    >
                      View as a Card
                    </Typography>
                    <Typography variant="body2" component="p">
                      Pokemon data is displayed in cards. It adapts to the
                      screen width. Select this option if you are on a mobile
                      device.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Paper>
        </Grid>
      </Grid>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <BarIcons />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Home;
