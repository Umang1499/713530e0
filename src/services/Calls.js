import { getApiCall, patchApiCall } from "../utils/Api";

export const getCalls = async () => {
  const result = await getApiCall(`/activities/`);
  return result;
};

export const getCallById = async (id) => {
  const result = await getApiCall(`/activities/${id}`);
  return result;
};

export const updateCallById = async (id, { isArchived }) => {
  const payload = {
    is_archived: isArchived,
  };
  const result = await patchApiCall(`/activities/${id}`, payload);
  return result;
};

export const resetCalls = async () => {
  const result = await patchApiCall(`/reset`);
  return result;
};