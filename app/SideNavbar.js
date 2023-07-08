import React from 'react';

const Sidebar = () => {
  // Icon styles
  const iconStyle = {
    marginRight: '10px',
  };

  // Sidebar styles
  const sidebarStyle = {
    width: '219px',
    height: '150vh',
    color: '#fff',
    padding: '20px',
    borderRight: '13px solid #333EA0',
    background: 'linear-gradient(230deg, #0F0A1C 0%, #0F091B 0%, #112148 100%)',
  };

  // Logo styles
  const logoStyle = {
    marginBottom: '20px',
    marginTop: '20px',
  };

  // Navigation link styles
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    marginTop: '10px',
  };

  return (
    <div style={sidebarStyle}>
      {/* Logo */}
      <div style={logoStyle}>
        <img src="logo.png" alt="Logo" style={{ width: '100px', height: '100px' }} />
      </div>

      {/* Navigation Links */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <a href="/dashboard" style={linkStyle}>
            <span style={iconStyle}>📊</span>
            Dashboard
          </a>
        </li>
        <li>
          <a href="/discover" style={linkStyle}>
            <span style={iconStyle}>🔍</span>
            Discover
          </a>
        </li>
        <li>
          <a href="/campaign" style={linkStyle}>
            <span style={iconStyle}>📈</span>
            Campaign
          </a>
        </li>
        <li>
          <a href="/communication" style={linkStyle}>
            <span style={iconStyle}>💬</span>
            Communication
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
