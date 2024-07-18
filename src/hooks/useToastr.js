import React from 'react';
import { ToastrContext } from '../context/ToastrContext.jsx';

export default function useToastr() {
  return React.useContext(ToastrContext);
}