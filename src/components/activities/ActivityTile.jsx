import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Avatar, Typography, CardActionArea } from "@mui/material";
import CallTypeIcon from "../common/CallTypeIcon.jsx";

const ActivityTile = ({ activity }) => {
  return (
    <Card variant="outlined" sx={{ mb: 1 }}>
      <CardActionArea
        LinkComponent={Link}
        to={`/activities/${activity.id}`}
        sx={{
          display: "flex",
          px: 1,
          justifyContent: "start",
        }}
      >
        <Avatar sx={{ marginRight: 1 }}>
          <CallTypeIcon callType={activity.call_type} />
        </Avatar>
        <CardContent>
          <Typography variant="body1">{activity.from}</Typography>
          <Typography variant="body2" color="text.secondary">
            tried to call on {activity.to}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {activity.time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActivityTile;
