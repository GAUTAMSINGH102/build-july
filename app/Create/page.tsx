"use client"

import React from 'react';
import Sidebar from '../SideNavbar'; // Import the Sidebar component
import FormCampaign from '../CampaignCreate';

const Create = () => {

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
        <div style={{marginBottom: "20px", fontWeight: 600}}>
          <h2>Campaign</h2>
        </div>
        {/* TABLE */}
        <FormCampaign />
      </div>
    </div>
  );
};

export default Create;
