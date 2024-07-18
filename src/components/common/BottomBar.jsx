import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import useActivity from "../../hooks/useActivity";
import { useNavigate } from "react-router-dom";
import AppRoutes from './../../config/Routes.js'

const BottomNavBar = () => {
  const { activities } = useActivity();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 1:
        navigate(AppRoutes.CONTACTS);
        break;
      case 2:
        navigate(AppRoutes.NUMPAD);
        break;
      case 3:
        navigate(AppRoutes.SETTINGS);
        break;
      case 4:
        navigate(AppRoutes.APP_DETAILS);
        break;
      case 2:
        navigate(AppRoutes.NUMPAD);
        break;
      default:
        navigate(AppRoutes.INBOX);
        break;
    }
  };

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
      <BottomNavigation value={value} onChange={handleChange} showLabels>
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
        <BottomNavigationAction
          disableRipple
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
