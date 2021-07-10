import React, { useState } from "react";
import {
  Box,
  Typography,
  makeStyles,
  Container,
  useTheme,
  AppBar,
  Tabs,
  Tab,
} from "@material-ui/core";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import Standard from "./Standard";
import Metric from "./Metric";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: "25px 0",
  },
  tabWidth: {
    maxWidth: "600px",
    textAlign: "center",
    margin: "auto",
  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Container className="home">
      <Typography className={classes.title} variant="h4">
        <Box textAlign="center" m={1}>
          Calculate Your Body Mass Index
        </Box>
      </Typography>
      <div className={classes.root}>
        <AppBar className={classes.tabWidth} position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="STANDARD" {...a11yProps(0)} />
            <Tab label="METRIC" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel className={classes.tabWidth} value={value} index={0} dir={theme.direction}>
            <Standard />
          </TabPanel>
          <TabPanel className={classes.tabWidth} value={value} index={1} dir={theme.direction}>
            <Metric />
          </TabPanel>
        </SwipeableViews>
      </div>
    </Container>
  );
}

export default Home;
