import React, { useMemo } from "react";
import { Avatar } from "@mui/material";
import CallMissedIcon from "@mui/icons-material/CallMissed";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import VoicemailIcon from "@mui/icons-material/Voicemail";

const CallTypeIcon = ({ callType }) => {
  const { icon, color } = useMemo(() => {
    switch (callType) {
      case "missed":
        return { icon: <CallMissedIcon />, color: "#FC5757" };
      case "answered":
        return { icon: <CallReceivedIcon />, color: "#2AC420" };
      case "voicemail":
        return { icon: <VoicemailIcon />, color: "#9393F0" };
      default:
        return { icon: null, color: "transparent" };
    }
  }, [callType]);

  return <Avatar style={{ backgroundColor: color }}>{icon}</Avatar>;
};

export default CallTypeIcon;
