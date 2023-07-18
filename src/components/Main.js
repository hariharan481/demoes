import { Container, Stack } from "@mui/material";
import React, { useState } from "react";
import "../App.css";
import "../styles/Main.css";
import { IndexSearch } from "./IndexSearch";
import "../styles/TabularSearch.css";

import { TabularPage } from "./TabularPage";

export const Main = () => {
  return (
    <div>
      <Container maxWidth="1%">
        <Stack direction={"row"} gap={"0.5%"} mt={2.5}>
          <IndexSearch />
          <TabularPage />
        </Stack>
      </Container>
    </div>
  );
};
