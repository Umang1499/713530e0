import React from "react";
import dayjs from "dayjs";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import UnarchiveOutlined from "@mui/icons-material/UnarchiveOutlined";
import useActivity from "../hooks/useActivity.js";
import { groupCallsByDate } from "../utils/DateHelpers.js";
import ActivityTile from "../components/activities/ActivityTile.jsx";

const ActivityArchivedFeedPage = () => {
  const { archivedActivities, unarchiveAll } = useActivity();
  const groupedCalls = groupCallsByDate(archivedActivities);

  return (
    <>
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
          minHeight="500px"
        >
          <Alert severity="info"  sx={{ fontWeight:'bold' }}>Archived Calls list is empty.</Alert>
        </Box>
      ) : (
        <List>
          {Object.keys(groupedCalls).map((date) => (
            <Box key={date} mb={4}>
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

export default ActivityArchivedFeedPage;
