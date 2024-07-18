import React from "react";
import Proptypes from "prop-types";
import { useNavigate } from "react-router";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppRoutes from './../config/Routes.js'
import Header from "../components/common/Header.jsx";
import BottomNavBar from "../components/common/BottomBar.jsx";

const Main = ({ children }) => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (_, newValue) => {
    setValue(newValue);

    if (newValue === 1) {
      navigate(AppRoutes.ARCHIVED);
    } else if (newValue === 0) {
      navigate(AppRoutes.INBOX);
    }
  };
  return (
    <Box className="container">
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box height="max-content" px={1}>
          <Header />
        </Box>
        <Box height="100%">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Inbox" />
            <Tab label="Archived Calls" />
          </Tabs>
        </Box>
      </Box>
      <Container sx={{ py: 1 }} className="container-view">
        {children}
      </Container>
      <BottomNavBar />
    </Box>
  );
};

Main.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Main;
