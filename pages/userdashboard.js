import React from 'react';

import Dashboard from '../components/organisms/Dashboard';
import PrivateRoute from '../components/organisms/PrivateRoute';

const UserDashboard = () => (
  <PrivateRoute>
    <Dashboard />
  </PrivateRoute>
);

export default UserDashboard;
