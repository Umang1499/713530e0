import React from "react";
import { Alert, Button, List, Box } from "@mui/material";
import { UnarchiveOutlined } from "@mui/icons-material";
import Main from "../layout/Main.jsx";
import ActivityTile from "../components/activities/ActivityTile.jsx";
import useActivity from "../hooks/useActivity.js";

const ActivityArchivedFeedPage = () => {
  const { archivedActivities, unarchiveAll } = useActivity();

  return (
    <Main>
      {archivedActivities.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          startIcon={<UnarchiveOutlined />}
          sx={{ py: 2, fontWeight: "bold" }}
          fullWidth
          onClick={unarchiveAll}
        >
          Unarchive All Calls
        </Button>
      )}
      {archivedActivities.length === 0 ? (
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Alert severity="info">Archived Calls list is empty.</Alert>
        </Box>
      ) : (
        <List>
          {archivedActivities.map((activity) => (
            <ActivityTile key={activity.id} activity={activity} />
          ))}
        </List>
      )}
    </Main>
  );
};

export default ActivityArchivedFeedPage;
