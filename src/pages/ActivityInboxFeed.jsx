import React from "react";
import dayjs from "dayjs";
import { Alert, Button, List, Box, Divider, Typography } from "@mui/material";
import { ArchiveOutlined } from "@mui/icons-material";
import Main from "../layout/Main.jsx";
import ActivityTile from "../components/activities/ActivityTile.jsx";
import useActivity from "../hooks/useActivity.js";
import { groupCallsByDate } from "../utils/DateHelpers.js";

const ActivityInboxFeedPage = () => {
  const { activities, archiveAll } = useActivity();
  const groupedCalls = groupCallsByDate(activities);

  return (
    <>
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
          {Object.keys(groupedCalls).map((date) => (
            <Box key={date} my={1}>
              <Divider>
                <Typography variant="caption" fontWeight="bold">
                  {dayjs(date).format("MMMM D, YYYY")}
                </Typography>
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
    </>
  );
};

export default ActivityInboxFeedPage;
