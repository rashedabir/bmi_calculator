import { Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
      width: "100%"
  }
}));

function Metric() {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
        className={classes.input}
          color="secondary"
          id="standard-basic"
          helperText="Your Height"
          label="Centimeters"
        />
        <br></br>
        <TextField
          color="secondary"
          className={classes.input}
          id="standard-basic"
          helperText="Your Weight"
          label="Kilograms"
        />
        <br></br>
        <br></br>
        <Button variant="contained" color="secondary">
          Calculate
        </Button>
      </form>
    </div>
  );
}

export default Metric;
