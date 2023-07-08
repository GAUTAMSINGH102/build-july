"use client"

import React from 'react';
import Sidebar from '../SideNavbar'; // Import the Sidebar component
import FormCampaign from '../CampaignCreate';

const Create = () => {

  const secondOne = {
    margin: "30px",
    flex: 1
  }
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />n

      {/* Content */}
      <div style={secondOne}>
        {/* TABLE */}
        <FormCampaign />
      </div>
    </div>
  );
};

export default Create;
