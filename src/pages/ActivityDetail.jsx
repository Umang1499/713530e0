import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArchiveOutlined, UnarchiveOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Main from "../layout/Main.jsx";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { getCallById } from "../services/Calls.js";
import CallTypeIcon from "../components/common/CallTypeIcon.jsx";
import useActivity from "../hooks/useActivity.js";

const ActivityDetailPage = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const { handleArchive, handleUnarchive } = useActivity();

  useEffect(() => {
    const getActivity = async () => {
      try {
        const { data } = await getCallById(id);
        setActivity(data);
      } catch (error) {
        console.error("Error fetching activity detail:", error);
      }
    };
    getActivity();
  }, [id]);

  if (!activity)
    return (
      <Main>
        <Typography>Loading...</Typography>
      </Main>
    );

  return (
    <Main>
      <List
        sx={{
          py: 0,
          width: "100%",
          maxWidth: 360,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
        }}
      >
        <ListItem
          secondaryAction={<CallTypeIcon callType={activity.call_type} />}
        >
          <ListItemText
            primaryTypographyProps={{ sx: { textTransform: "capitalize" } }}
            primary={`${activity.call_type} Call`}
            secondary={activity.created_at}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="From" secondary={activity.from} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="To" secondary={activity.to} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Via" secondary={activity.via} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="Duration"
            secondary={`${activity.duration} seconds`}
          />
        </ListItem>
      </List>
      <Button
        variant="outlined"
        startIcon={
          activity.is_archived ? <UnarchiveOutlined /> : <ArchiveOutlined />
        }
        color="primary"
        fullWidth
        sx={{ my: 2, fontWeight: "bold" }}
        onClick={() =>
          activity.is_archived
            ? handleUnarchive(activity.id)
            : handleArchive(activity.id)
        }
      >
        {activity.is_archived ? "Unarchive" : "Archive"} Call
      </Button>
    </Main>
  );
};

export default ActivityDetailPage;
