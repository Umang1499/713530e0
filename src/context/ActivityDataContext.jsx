import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { getCalls, resetCalls, updateCallById } from "../services/Calls";
import useToastr from "../hooks/useToastr.js";
import Main from "../layout/Main.jsx";
import { useNavigate } from "react-router-dom";

export const ActivityDataContext = createContext({
  activities: [],
  archivedActivities: [],
  handleArchive: () => {},
  handleUnarchive: () => {},
  archiveAll: () => {},
  unarchiveAll: () => {},
});

export const ActivityDataProvider = ({ children }) => {
  const { showErrorToastr, showSuccessToastr } = useToastr();
  const navigate = useNavigate()
  const [activities, setActivities] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const [archivedActivities, setArchivedActivities] = useState([]);

  useEffect(() => {
    const getActivities = async () => {
      try {
        const { data } = await getCalls();
        setActivities(data.filter((activity) => !activity.is_archived));
        setArchivedActivities(data.filter((activity) => activity.is_archived));
      } catch (error) {
        console.error("Error fetching activities:", error);
        showErrorToastr(error.message || 'Something went wrong while fetching call activities.')
      }
    };
    getActivities();
  }, [refreshData]);

  const handleArchive = useCallback(
    async (id) => {
      try {
        await updateCallById(id, { isArchived: true });
        setRefreshData(!refreshData);
        navigate(-1);
        showSuccessToastr('Call archived successfully.')
      } catch (error) {
        console.error("Error archiving activity:", error);
        showErrorToastr(error.message || 'Something went wrong while archiving activity.')

      }
    },
    [activities]
  );

  const handleUnarchive = useCallback(
    async (id) => {
      try {
        await updateCallById(id, { isArchived: false });
        setRefreshData(!refreshData);
        navigate(-1);
        showSuccessToastr('Call unarchived successfully.')
      } catch (error) {
        console.error("Error unarchiving activity:", error);
        showErrorToastr(error.message || 'Something went wrong while unarchiving activity.')
      }
    },
    [archivedActivities]
  );

  const archiveAll = useCallback(async () => {
    try {
      await Promise.all(
        activities.map((activity) =>
          updateCallById(activity.id, { isArchived: true })
        )
      );
      setRefreshData(!refreshData);
      showSuccessToastr('All calls archived successfully.')
    } catch (error) {
      console.error("Error archiving all activities:", error);+
      showErrorToastr(error.message || 'Something went wrong while archiving all activities.')
    }
  }, [activities, archivedActivities]);

  const unarchiveAll = useCallback(async () => {
    try {
      await resetCalls();
      setRefreshData(!refreshData);
      showSuccessToastr('All calls unarchived successfully.')
    } catch (error) {
      console.error("Error unarchiving all activities:", error);
    }
  }, [activities, archivedActivities]);

  return (
    <ActivityDataContext.Provider
      value={{
        activities,
        archivedActivities,
        handleArchive,
        handleUnarchive,
        archiveAll,
        unarchiveAll,
      }}
    >
     <Main>
     {children}
     </Main>
    </ActivityDataContext.Provider>
  );
};
