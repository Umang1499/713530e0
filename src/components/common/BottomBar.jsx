import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Badge,
  Box,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import useActivity from "../../hooks/useActivity";

const BottomNavBar = () => {
  const [value, setValue] = useState(0);
  const { activities } = useActivity();

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        position: "absolute",
        bottom: 0,
        width: "inherit",
        boxShadow: "0px -1px 5px rgba(0,0,0,0.1)",
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          disableRipple
          icon={
            <Badge badgeContent={activities.length}>
              <PhoneIcon />
            </Badge>
          }
        />
        <BottomNavigationAction disableRipple icon={<PersonIcon />} />
        <BottomNavigationAction
          disableRipple
          icon={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                marginTop: -10,
              }}
            >
              <AppsIcon
                fontSize="large"
                sx={{
                  bgcolor: "#2AC420",
                  color: "white",
                  borderRadius: "50%",
                  padding: 1,
                  position: "absolute",
                  top: "-5px",
                }}
              />
            </Box>
          }
        />
        <BottomNavigationAction disableRipple icon={<SettingsIcon />} />
        <BottomNavigationAction disableRipple
          icon={
            <FiberManualRecordIcon
              sx={{ color: "#2AC420", fontSize: "small" }}
            />
          }
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavBar;
