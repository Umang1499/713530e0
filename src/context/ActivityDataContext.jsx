import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { getCalls, updateCallById } from "../services/Calls";
import useToastr from "../hooks/useToastr.js";

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
  const [activities, setActivities] = useState([]);
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
  }, []);

  const handleArchive = useCallback(
    async (id) => {
      try {
        await updateCallById(id, { isArchived: true });
        setActivities((prev) => prev.filter((activity) => activity.id !== id));
        setArchivedActivities((prev) => [
          ...prev,
          activities.find((activity) => activity.id === id),
        ]);
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
        setArchivedActivities((prev) =>
          prev.filter((activity) => activity.id !== id)
        );
        setActivities((prev) => [
          ...prev,
          archivedActivities.find((activity) => activity.id === id),
        ]);
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
      setArchivedActivities([...archivedActivities, ...activities]);
      setActivities([]);
      showSuccessToastr('All calls archived successfully.')
    } catch (error) {
      console.error("Error archiving all activities:", error);+
      showErrorToastr(error.message || 'Something went wrong while archiving all activities.')
    }
  }, [activities, archivedActivities]);

  const unarchiveAll = useCallback(async () => {
    try {
      await Promise.all(
        archivedActivities.map((activity) =>
          updateCallById(activity.id, { isArchived: false })
        )
      );
      setActivities([...activities, ...archivedActivities]);
      setArchivedActivities([]);
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
      {children}
    </ActivityDataContext.Provider>
  );
};
