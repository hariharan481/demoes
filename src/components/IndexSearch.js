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
import "../App.css";
import "../styles/Main.css";
import DrugTable from "./DrugTable";
import IndexTables from "./IndexTables";
import NeoplasmTable from "./NeoplasmTable";
import "../styles/IndexSearch.css";
export const IndexSearch = (isValueSelected) => {
  const [value, setValue] = useState(0);
  const [showTable, setShowTable] = useState(false);
  const [showIndx, setShowIndex] = useState(false);
  const [showDrug, setShowdrug] = useState(false);
  const handleIndexClick = () => {
    setShowIndex(!showIndx);
    setShowTable(false);
    setShowdrug(false);
  };
  const handleTableClick = () => {
    setShowTable(!showTable);
    setShowIndex(false);
    setShowdrug(false);
  };
  const handleDrugClick = () => {
    setShowdrug(!showDrug);
    setShowIndex(false);
    setShowTable(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShowIndex(false);
    setShowTable(false);
    setShowdrug(false);
  };

  return (
    <div className="indexpage">
      <Button
        onClick={handleIndexClick}
        variant="contained"
        sx={{
          textAlign: "center",
          mt: "-1.8%",
          width: "6%",
          height: "4%",
          position: "absolute",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          textTransform: "lowercase",
          backgroundColor: "#90B2D8",
        }}
      >
        {showIndx ? "" : ""}
        Index
      </Button>
      <div className="IndexTablecontainer">{showIndx && <IndexTables />}</div>
      <Button
        onClick={handleTableClick}
        variant="contained"
        sx={{
          textAlign: "center",
          mt: "-1.8%",
          width: "6%",
          height: "4%",
          position: "absolute",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          ml: "6%",
          textTransform: "lowercase",
          backgroundColor: "#90B2D8",
        }}
      >
        {showTable ? "" : ""}
        Neoplasam
      </Button>
      {showTable && <NeoplasmTable />}
      <Button
        variant="conatined"
        onClick={handleDrugClick}
        color="white"
        sx={{
          textAlign: "center",
          mt: "-1.9%",
          width: "6%",
          height: "3%",
          position: "absolute",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          ml: "12%",
          textTransform: "lowercase",
          backgroundColor: "#90B2D8",
          height: "30px",
          color: "white",
        }}
      >
        {showDrug ? "" : ""}
        Drugs
      </Button>
      <div className="drugcontainer">{showDrug && <DrugTable />}</div>
    </div>
  );
};
