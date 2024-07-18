import React from "react";
import { Alert, Button, List, Box } from "@mui/material";
import { ArchiveOutlined } from "@mui/icons-material";
import Main from "../layout/Main.jsx";
import ActivityTile from "../components/activities/ActivityTile.jsx";
import useActivity from "../hooks/useActivity.js";

const ActivityInboxFeedPage = () => {
  const { activities, archiveAll } = useActivity();

  return (
    <Main>
      {activities.length > 0 && (
        <Button
          variant="outlined"
          color="primary"
          startIcon={<ArchiveOutlined />}
          sx={{ py: 2, fontWeight: "bold" }}
          fullWidth
          onClick={archiveAll}
        >
          Archive All Calls
        </Button>
      )}
      {activities.length === 0 ? (
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Alert severity="info">Inbox Calls list is empty.</Alert>
        </Box>
      ) : (
        <List>
          {activities.map((activity) => (
            <ActivityTile key={activity.id} activity={activity} />
          ))}
        </List>
      )}
    </Main>
  );
};

export default ActivityInboxFeedPage;
