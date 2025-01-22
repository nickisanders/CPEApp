import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './appbar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Outlet /> {/* Render the current page here */}
      </main>
    </>
  );
};

export default Layout;
