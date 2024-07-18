import React from "react";
import dayjs from "dayjs";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
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

ActivityTile.propTypes = {
  activity: Proptypes.shape({
    direction: Proptypes.string.isRequired,
    from: Proptypes.number.isRequired,
    to: Proptypes.number.isRequired,
    via: Proptypes.number.isRequired,
    duration: Proptypes.number.isRequired,
    is_archived: Proptypes.bool.isRequired,
    call_type: Proptypes.string.isRequired,
    id: Proptypes.string.isRequired,
    created_at: Proptypes.string.isRequired,
  }).isRequired,
};

export default ActivityTile;
