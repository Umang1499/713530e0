import React from 'react';
import Proptypes from 'prop-types';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Toastr = ({ isOpen, message, type, closeToastr, duration }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isOpen}
    autoHideDuration={duration}
    onClose={closeToastr}
  >
    <Alert severity={type} variant="filled">
      {message}
    </Alert>
  </Snackbar>
);

Toastr.default = {
  duration: 3000,
};

Toastr.propTypes = {
  isOpen: Proptypes.bool.isRequired,
  message: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  closeToastr: Proptypes.func.isRequired,
  duration: Proptypes.number,
};
export default Toastr;