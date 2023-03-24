import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <div>____________</div>
      <Link style={{ color: 'blue' }} to="/login">
        Login!
      </Link>
      <div>____________</div>

      <Outlet />
    </>
  );
};
