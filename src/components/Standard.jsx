import { Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      with: "25cm"
    },
  },
}));

function Standard() {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          color="secondary"
          id="standard-basic"
          helperText="Your Height"
          label="Feet"
        />
        <TextField
          color="secondary"
          id="standard-basic"
          helperText="Your Height"
          label="Inch"
        />
        <TextField
          color="secondary"
          id="standard-basic"
          helperText="Your Weight"
          label="Pound"
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

export default Standard;
