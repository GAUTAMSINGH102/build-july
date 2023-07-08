import React from "react";

export const DashboardSecond = () => {
  const pageStyle = {
    padding: "20px",
  };

  const borderStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thStyle = {
    padding: "8px",
    borderBottom: "1px solid #ccc",
    backgroundColor: "#E5EDFF",
    fontWeight: "bold",
  };

  const tdStyle = {
    padding: "8px",
    borderBottom: "1px solid #ccc",
  };

  const cardContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "20px",
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#EBEEFF",
    width: "1051px",
    height: "234px"
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  };

  const videoTableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    backgroundColor: "#EBEEFF"
  };

  const videoContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginLeft: "20px"
  };
  
  const videoTextStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const influencerContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };
  
  const influencerImageStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
  };
  
  const influencerNameStyle = {
    display: "flex",
    alignItems: "center",
  };
  
  const dropdownStyle = {
    padding: "5px",
    borderRadius: "2px",
    border: "1px solid #8A88FF",
    background: "linear-gradient(180deg, #BBC5FC 0%, rgba(228, 233, 255, 0.00) 100%)"

  };

  const typography = {
    color: "#4C3DFF",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  };

  const insideTable = {
    padding : "5px"
  }

  return (
    <div style={pageStyle}>
      <div style={borderStyle}>
        <h2>Table</h2>
        <table style={tableStyle}>
        <thead>
            <tr>
              <th style={thStyle}>Influencer Name</th>
              <th style={thStyle}>Likes</th>
              <th style={thStyle}>Views</th>
              <th style={thStyle}>Comments</th>
              <th style={thStyle}>Insights</th>
            </tr>
          </thead>
          <tbody>
            {/* Table Rows */}
            <tr>
            <td style={tdStyle}>
              <div style={influencerContainerStyle}>
                <div style={influencerImageStyle}></div>
                <div style={influencerNameStyle}>
                  <p>Influencer Name</p>
                </div>
              </div>
            </td>
            <td style={tdStyle}>100</td>
            <td style={tdStyle}>1,000</td>
            <td style={tdStyle}>50</td>
            <td style={tdStyle}>
              <select style={dropdownStyle}>
                <option value="insight1">Insight 1</option>
                <option value="insight2">Insight 2</option>
                <option value="insight3">Insight 3</option>
              </select>
            </td>
          </tr>
          </tbody>
        </table>
    
        <div style={cardContainerStyle}>
          <div style={cardStyle}>
            <h3 style={typography}>User Engagement</h3>

          </div>

          <div style={cardStyle}>
          <h3 style={typography}>Comment Sentiment</h3>

          </div>

          <div style={cardStyle}>
          <h3 style={typography}>Comment Word Cloud</h3>

          </div>
        </div>

        <div>
        
        <table style={videoTableStyle}>
        <h3 style={typography}>Content Posted</h3>

          
          <tbody>
            {/* Table Rows */}
            <tr>
            <td style={tdStyle}>
            <div style={videoContainerStyle}>
              <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg" alt="Video 1" width="80" height="60" />
              <div style={videoTextStyle}>
                <p>Video Name <br /> Author Name</p>
              </div>
            </div>
          </td>

          <td style={tdStyle}>100</td>
          <td style={tdStyle}>1000</td>
          <td style={tdStyle}>50</td>
          <td style={tdStyle}>5%</td>
        </tr>
          </tbody>


        </table>
        </div>
      </div>
    </div>
  );
};