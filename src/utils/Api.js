import axios from "axios";
const API_URL = 'https://aircall-backend.onrender.com';

export const patchApiCall = async (endpoint, data) => {
  const options = {
    url: `${API_URL}${endpoint}`,
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: data || {},
  };

  const response = await axios(options);
  return response;
};

export const getApiCall = async (endpoint) => {
  const options = {
    url: `${API_URL}${endpoint}`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
  };

  const response = await axios(options);
  return response;
};