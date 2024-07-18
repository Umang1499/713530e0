import React from "react";
import dayjs from "dayjs";
import { Alert, Button, List, Box, Divider, Typography } from "@mui/material";
import { UnarchiveOutlined } from "@mui/icons-material";
import Main from "../layout/Main.jsx";
import ActivityTile from "../components/activities/ActivityTile.jsx";
import useActivity from "../hooks/useActivity.js";
import { groupCallsByDate } from "../utils/DateHelpers.js";

const ActivityArchivedFeedPage = () => {
  const { archivedActivities, unarchiveAll } = useActivity();
  const groupedCalls = groupCallsByDate(archivedActivities);

  return (
    <Main>
      {archivedActivities.length > 0 && (
        <Button
          variant="outlined"
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
          {Object.keys(groupedCalls).map((date) => (
            <Box key={date} mb={4}>
              <Divider>
                <Typography variant="caption" fontWeight="bold">{dayjs(date).format("MMMM D, YYYY")}</Typography>
              </Divider>
              <List>
                {groupedCalls[date].map((activity) => (
                  <ActivityTile key={activity.id} activity={activity} />
                ))}
              </List>
            </Box>
          ))}
        </List>
      )}
    </Main>
  );
};

export default ActivityArchivedFeedPage;
