import { Grid } from '@chakra-ui/react';
import { AppBar } from 'components/AppBar/AppBar';

import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Grid gridTemplateColumns="300px 1fr">
        <AppBar>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </AppBar>
      </Grid>
    </>
  );
};
