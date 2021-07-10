import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    width: "100%",
  },
  result: {
    margin: "20px 0",
  },
}));

function Metric() {
  const classes = useStyles();
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState("");
  const [messege, setMessege] = useState("");

  const getResult = (e) => {
    e.preventDefault();
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    if (bmi < 18.6) {
      setMessege("Under weight");
    } else if (bmi >= 18.6 && bmi < 24.9) {
      setMessege("Normal weight");
    } else {
      setMessege("Over weight");
    }
    setResult(bmi);
  };

  return (
    <div>
      <form
        onSubmit={getResult}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          className={classes.input}
          color="secondary"
          id="standard-basic"
          helperText="Your Height"
          label="Centimeters"
          type="number"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <br></br>
        <TextField
          color="secondary"
          className={classes.input}
          id="standard-basic"
          helperText="Your Weight"
          label="Kilograms"
          type="number"
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
        <br></br>
        <br></br>
        <Button variant="contained" color="secondary" type="submit">
          Calculate
        </Button>
      </form>
      {result === "" ? null : (
        <Typography className={classes.result} variant="h5">
          {messege} : {result}
        </Typography>
      )}
    </div>
  );
}

export default Metric;
