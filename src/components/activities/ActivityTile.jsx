import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
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
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" justifyContent="start" alignItems="center" px={1}>
          <Avatar sx={{ marginRight: 1 }}>
            <CallTypeIcon callType={activity.call_type} />
          </Avatar>
          <CardContent>
            <Typography variant="body1">{activity.from}</Typography>
            <Typography variant="body2" color="text.secondary">
              tried to call on {activity.to}
            </Typography>
          </CardContent>
        </Box>
        <CardContent>
          <Typography variant="caption" noWrap>
            {dayjs(activity.created_at).format("h:mm A")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActivityTile;
