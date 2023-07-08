"use client"

import React from 'react';
import Sidebar from '../SideNavbar'; // Import the Sidebar component
import Dashboard from '../Dashboard';

const Dash = () => {

  const main = {
    display: 'flex',
    backgroundColor: "#fff"
  }

  const secondOne = {
    margin: "30px",
    flex: 1
  }
  return (
    <div style={main}>
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div style={secondOne}>
        <Dashboard />
      </div>
    </div>
  );
};

export default Dash;
