import React from "react";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import Codenotes from "./Codenotes";
import Sectionnotes from "./Sectionnotes";
import Chapternotes from "./Chapternotes";
import "../App.css";
import "../styles/Main.css";
import "../styles/TabularSearch.css";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Tabsdetails = (isValueSelected) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabscontainer">
      <div className="tabswrapper">
        <Stack direction={"row"} gap={"70px"} ml={0}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ marginTop: "-10px" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                className="tabs"
                sx={{ marginLeft: "-25px" }}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#4185d2",

                    width: "6%",
                    marginLeft: "38px",
                    marginBottom: "10px",
                  },
                }}
              >
                <Tab
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  sx={{
                    cursor: "pointer",
                    variant: "subtitle1",
                    fontWeight: "700px",
                    color: "#4185D2",
                    textTransform: "none",
                    width: "150px",
                  }}
                  label="  Code notes"
                  {...a11yProps(0)}
                />
                <Tab
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  sx={{
                    cursor: "pointer",
                    variant: "subtitle1",
                    fontWeight: "700px",
                    color: "#4185D2",
                    textTransform: "none",
                    width: "145px",
                  }}
                  variant="subtitle1"
                  fontWeight={"700"}
                  label="Section notes"
                  {...a11yProps(1)}
                />
                <Tab
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  sx={{
                    cursor: "pointer",
                    variant: "subtitle1",
                    fontWeight: "700px",
                    color: "#4185D2",
                    textTransform: "none",
                    width: "150px",
                  }}
                  variant="subtitle1"
                  fontWeight={"700"}
                  label="Chapter notes"
                  {...a11yProps(2)}
                />
                <Tab
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  sx={{
                    cursor: "pointer",
                    variant: "subtitle1",
                    fontWeight: "700px",
                    color: "#4185D2",
                    textTransform: "none",
                    width: "150px",
                  }}
                  variant="subtitle1"
                  fontWeight={"700"}
                  label="Chapter guidlines"
                  {...a11yProps(3)}
                />
              </Tabs>
            </Box>
            <div className="tabpanels">
              {" "}
              <CustomTabPanel value={value} index={0}>
                <Codenotes />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Sectionnotes />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Chapternotes />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}></CustomTabPanel>
            </div>
          </Box>
        </Stack>
      </div>
    </div>
  );
};
