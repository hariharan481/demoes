import React from "react";

import {
  Box,
  Container,
  Stack,
  Typography,
  Tab,
  Tabs,
  Button,
} from "@mui/material";
import { useState } from "react";
import Codedet from "./Codedet";
import PropTypes from "prop-types";
import Codenotes from "./Codenotes";
import Sectionnotes from "./Sectionnotes";
import Chapternotes from "./Chapternotes";
import "../App.css";
import "../styles/Main.css";

import DrugTable from "./DrugTable";

import IndexTables from "./IndexTables";
import NeoplasmTable from "./NeoplasmTable";
import { IndexSearch } from "./IndexSearch";

import { Tabsdetails } from "./TabsDetais";
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

export const TabularPage = (isValueSelected) => {
  return (
    <div className="Tabularsearch">
      <div className="tabhead">
        <Typography
          className="tabshead"
          variant="subtitle1"
          fontFamily={"sans-serif"}
          color={" #4185d2"}
          noWrap
        >
          Tabular Search
        </Typography>
      </div>
      <Stack direction={"column"} ml={"12%"} mt={"15%"}>
        <div className="codedetails">
          <Typography
            variant="subtitle1"
            fontFamily={"sans-serif"}
            color={" #4185d2"}
            fontWeight={600}
          >
            Code details
          </Typography>
        </div>
        <div className="codeconatiner">{isValueSelected && <Codedet />}</div>
        <Tabsdetails />
      </Stack>
    </div>
  );
};
