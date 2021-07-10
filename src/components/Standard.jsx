import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "100%",
  },
  result: {
    margin: "20px 0",
  },
}));

function Standard() {
  const classes = useStyles();
  const [feet, setFeet] = useState(0);
  const [inch, setInch] = useState(0);
  const [pound, setPound] = useState(0);
  const [result, setResult] = useState("");
  const [messege, setMessege] = useState("");
  const totalInch = parseInt(feet * 12) + parseInt(inch);
  const totalHeight = parseFloat(totalInch * 2.54).toFixed(2);
  const totalWeight = parseFloat(pound * 0.453592).toFixed(2);

  const getResult = (e) => {
    e.preventDefault();
    const bmi = (totalWeight / ((totalHeight * totalHeight) / 10000)).toFixed(
      1
    );
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
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              color="secondary"
              id="standard-basic"
              helperText="Your Height"
              label="Feet"
              type="number"
              className={classes.paper}
              onChange={(e) => {
                setFeet(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              color="secondary"
              id="standard-basic"
              helperText="Your Height"
              label="Inch"
              type="number"
              className={classes.paper}
              onChange={(e) => {
                setInch(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              color="secondary"
              id="standard-basic"
              helperText="Your Weight"
              label="Pound"
              type="number"
              className={classes.paper}
              onChange={(e) => {
                setPound(e.target.value);
              }}
            />
          </Grid>
        </Grid>

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

export default Standard;
