import React from 'react';
import { ActivityDataContext } from '../context/ActivityDataContext.jsx';

export default function useActivity() {
  return React.useContext(ActivityDataContext);
}