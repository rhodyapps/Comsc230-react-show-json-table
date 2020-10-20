import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import MomentUtils from "@date-io/moment";
import { PatientCard } from "fhir-ui";
import { patient } from "./fhir-examples";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3)
  },
  header: {
    margin: theme.spacing(1)
  },
  body: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(1)
  }
}));

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[900],
      contrastText: "#FFF"
    },
    secondary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[900],
      contrastText: "#FFF"
    },
    background: {
      default: "#f9f9f9"
    }
  }
});

const FhirDemo = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Container>
          <div className={classes.header}>
            <Typography variant="h4" gutterBottom className={classes.root}>
              fhir-ui Patient Card Example
            </Typography>
          </div>
          <div className={classes.body}>
            <Grid container spacing={3} direction="row">
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Patient Card
                </Typography>
                <PatientCard patient={patient} />
              </Grid>
            </Grid>
          </div>
        </Container>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default FhirDemo;
