import React from "react";
import Proptypes from 'prop-types';
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

const ComingSoon = ({ pageName }) => {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="500px"
    >
      <Alert severity="info" sx={{ fontWeight: "bold" }}>
        {pageName} Coming Soon
      </Alert>
    </Box>
  );
};

ComingSoon.propTypes = {
  pageName: Proptypes.string.isRequired,
};

export default ComingSoon;
