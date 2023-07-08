import React from "react";


const Dash = () => {
  const dashboardStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
    padding: "20px",
  };

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const cardStyle = {
    flex: 1,
    width: "192px",
    height: "169px",
    backgroundColor: "#fff",
    margin: "80px",
    borderRadius: "8px",
    textAlign: "center",
    position: "relative",
    boxShadow: "0px 0px 0px 0px rgba(76, 61, 255, 0.30), 0px 3px 6px 0px rgba(76, 61, 255, 0.29), 0px 12px 12px 0px rgba(76, 61, 255, 0.26), 0px 26px 16px 0px rgba(76, 61, 255, 0.15), 0px 46px 19px 0px rgba(76, 61, 255, 0.04), 0px 73px 20px 0px rgba(76, 61, 255, 0.01)"

  };
  
  const cardBackgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "60%",
    borderRadius: "8px 8px 0 0",
  };

  const mediaInsightsStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "20px",
    backgroundColor: "#E5EDFF",
    padding: "10px"
  };

  const summaryStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
  };

  const userEngagementStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
  };

  const demographicStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
  };

  const tableContainerStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
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

  const contentInsightsStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  };

  const topContent = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    backgroundColor: "#E5EDFF",
    padding: "20px",
    borderRadius: "8px",
    width: "524px",
    height: "274px"
  };

  const first = {
    backgroundColor: "#D9D9D9",
    padding: "50px",
    margin: "5px",
    borderRadius: "8px",
  };

  const second = {
    backgroundColor: "#D9D9D9",
    padding: "50px",
    margin: "5px",
    borderRadius: "8px",
  };

  const contentInsight = {
    backgroundColor: "#E5EDFF",
    padding: "20px",
    borderRadius: "8px",
    width: "524px",
    height: "274px"
  };

  const typographyStyle = {
    color: "#354682",
    fontFamily: "Montserrat",
    fontSize: "64px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    marginTop: "30px",
    marginBottom: "30px"
  };

  const belowTypography = {

    fontFamily: "Montserrat",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    color: "#354682"
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
  

  return (
    <div style={dashboardStyle}>
      <div style={cardContainerStyle}>
      <div style={cardBackgroundStyle}></div>
        <div style={cardStyle}>
          <h3 style={typographyStyle}>3/5</h3>
          <p style={belowTypography}>Influencer Lives</p>
        </div>
        <div style={cardStyle}>
        <h3 style={typographyStyle}>22/25</h3>
          <p style={belowTypography}>Deliverables Delivered</p>
        </div>
        <div style={cardStyle}>
        <h3 style={typographyStyle}>2.38M</h3>
          <p style={belowTypography}>Views</p>
        </div>
      </div>

      <div style={mediaInsightsStyle}>
        <div style={summaryStyle}>
          <h3>Summary</h3>
          <p>Total Views: 10000</p>
          <p>Total Likes: 500</p>
          <p>Total Comments: 500</p>
          <p>Total Accounts Reached: 500</p>
        </div>
        <div style={userEngagementStyle}>
          <h3>User Engagement</h3>
          {/* Add Line Plot Graph Component */}
        </div>
        <div style={demographicStyle}>
          <h3>Demographic</h3>
          {/* Add Pie Chart Components */}
        </div>
      </div>

      <div style={tableContainerStyle}>
        <h3>Top Influencers</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Influencer Name</th>
              <th style={thStyle}>Location</th>
              <th style={thStyle}>Deliverable</th>
              <th style={thStyle}>Followers</th>
            </tr>
          </thead>
          <tbody>
            {/* Add Table Rows */}
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
          </tr>

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
          </tr>
          </tbody>
        </table>
      </div>

      <div style={contentInsightsStyle}>
        <div>
          <h3>Top Content</h3>
          <div style={topContent}>
            <div style={first}></div>
            <div style={second}></div>
            {/* Add Pie Chart Component */}
          </div>
        </div>
        <div>
          <h3>Content Insight</h3>
          <div style={contentInsight}>
            {/* Add Pie Chart Component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
