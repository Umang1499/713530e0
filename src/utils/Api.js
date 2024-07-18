import axios from "axios";

export const patchApiCall = async (endpoint, data) => {
  const options = {
    url: `${process.env.REACT_APP_API_ENDPOINT}${endpoint}`,
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
    url: `${process.env.REACT_APP_API_ENDPOINT}${endpoint}`,
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