import React, { useEffect } from 'react';
import Router from 'next/router';

import { Auth } from '../../../config/auth';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = Auth.isAuthenticated();

  useEffect(() => {
    if (!isAuthenticated) {
      Router.push('/signin');
    }
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
