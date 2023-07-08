import React, { useState } from "react";
import { Typography, TextField, Button, Stepper, Step, StepLabel } from "@mui/material";
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form";

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Payment",
  ];
}

//First
const BasicForm = () => {
  const [campaignBanner, setCampaignBanner] = useState(null);
  const [campaignName, setCampaignName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [brandLogo, setBrandLogo] = useState(null);
  const [campaignBrief, setCampaignBrief] = useState("");
  const [deliverables, setDeliverables] = useState([]);
  const [deliverableNo, setDeliverableNo] = useState("");
  const [platform, setPlatform] = useState("");
  const [typeOfDeliverable, setTypeOfDeliverable] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleCampaignBannerChange = (event) => {
    setCampaignBanner(event.target.files[0]);
  };

  const handleBrandLogoChange = (event) => {
    setBrandLogo(event.target.files[0]);
  };

  const handleDeliverableNoChange = (event) => {
    setDeliverableNo(event.target.value);
  };

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  const handleTypeOfDeliverableChange = (event) => {
    setTypeOfDeliverable(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddDeliverable = () => {
    const newDeliverable = {
      deliverableNo,
      platform,
      typeOfDeliverable,
      quantity,
    };

    setDeliverables([...deliverables, newDeliverable]);
    setDeliverableNo("");
    setPlatform("");
    setTypeOfDeliverable("");
    setQuantity("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission or data handling here

    // Reset form fields
    setCampaignBanner(null);
    setCampaignName("");
    setBrandName("");
    setBrandLogo(null);
    setCampaignBrief("");
    setDeliverables([]);
    setDeliverableNo("");
    setPlatform("");
    setTypeOfDeliverable("");
    setQuantity("");
  };



  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const headingStyle = {
    marginBottom: "10px",
  };

  const labelStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };

  const inputStyle = {
    padding: "5px",
    borderRadius: "5px",
    border: "1.3px solid #9CABFD"
  };

  const bannerinputStyle = {
    padding: "5px",
    marginTop: "20px",
    borderRadius: "5px",
    border: "2px solid #9CABFD"
  };

  const tdinputdrop = {
    padding: "5px",
    backgroundColor: "#D4D3FF",
    borderRadius: "5px",
    border: "1px solid #9CABFD"
  }

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  const addDeliverable = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #9CABFD",
    background: "#D4D3FF",
    cursor: "pointer",
    width: "666px",
    height: "45px",
    marginTop: "50px",
    marginBottom: "50px"
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "666px",
    height: "45px"
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

  const smallImageStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginBottom: "10px",
  };

  const bannerStyle = {
    border: "2px dashed #ccc",
    borderRadius: "8px",
    padding: "20px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const containerStyle = {
    display: "flex",
    gap: "20px",
  };
  
  const detailsStyle = {
    width: "50%",
    marginRight: "20px"
  };
  
  const briefStyle = {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  


  return (
    <form onSubmit={handleSubmit} style={formStyle}>

      {/* <div>
        <h2 style={headingStyle}>Campaign Banner</h2>
        <input type="file" onChange={handleCampaignBannerChange} accept="image/*" />
      </div> */}

<h2 style={headingStyle}>Campaign Banner</h2>

      <div style={bannerStyle}>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg" alt="Small Image" style={smallImageStyle} />
        </div>
        <div>
          <label>
            <input type="file" style={{marginLeft: "80px"}} onChange={handleCampaignBannerChange} accept="image/*" />
          </label>
        </div>
        <div>
          <label>
            <input type="text" style={bannerinputStyle} />
          </label>
        </div>
      </div>



      <div style={containerStyle}>
    <div style={detailsStyle}>
      <h2 style={headingStyle}>Campaign Details</h2>
      <label style={labelStyle}>
        Campaign Name:
        <input
          type="text"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
          style={inputStyle}
        />
      </label>
      <label style={labelStyle}>
        Brand Name:
        <input
          type="text"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          style={inputStyle}
        />
      </label>



      <label style={labelStyle}>
        Brand Logo:

      
      <div style={bannerStyle}>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg" alt="Small Image" style={smallImageStyle} />
        </div>
        <div>
          <label>
            <input type="file" style={{marginLeft: "80px"}} onChange={handleCampaignBannerChange} accept="image/*" />
          </label>
        </div>
        <div>
          <label>
            <input type="text" style={bannerinputStyle} />
          </label>
        </div>
      </div>

      </label>
    </div>

    <div style={briefStyle}>
      <h2 style={headingStyle}>Campaign Brief</h2>
      <textarea
        value={campaignBrief}
        onChange={(e) => setCampaignBrief(e.target.value)}
        style={{ height: "calc(100% - 50px)", resize: "none", borderRadius: "5px",
        border: "1.3px solid #9CABFD"}}
      />
    </div>
  </div>

      {/* ... previous code ... */}
      <div>
        <h2 style={headingStyle}>Campaign Deliverables</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Deliverable No</th>
              <th style={thStyle}>Platform</th>
              <th style={thStyle}>Type of Deliverable</th>
              <th style={thStyle}>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {deliverables.map((deliverable, index) => (
              <tr key={index}>
                <td style={tdStyle}>{deliverable.deliverableNo}</td>
                <td style={tdStyle}>{deliverable.platform}</td>
                <td style={tdStyle}>{deliverable.typeOfDeliverable}</td>
                <td style={tdStyle}>{deliverable.quantity}</td>
              </tr>
            ))}


            <tr>
              <td style={tdStyle}>
                <input
                  type="text"
                  value={deliverableNo}
                  onChange={handleDeliverableNoChange}
                  style={inputStyle}
                />
              </td>
              <td style={tdStyle}>
                <select value={platform} onChange={handlePlatformChange} style={tdinputdrop}>
                  <option value="">Select Platform</option>
                  <option value="Platform 1">Platform 1</option>
                  <option value="Platform 2">Platform 2</option>
                  <option value="Platform 3">Platform 3</option>
                </select>
              </td>
              <td style={tdStyle}>
                <select value={typeOfDeliverable} onChange={handleTypeOfDeliverableChange} style={tdinputdrop}>
                  <option value="">Select Type</option>
                  <option value="Type 1">Type 1</option>
                  <option value="Type 2">Type 2</option>
                  <option value="Type 3">Type 3</option>
                </select>
              </td>
              <td style={tdStyle}>
                <input
                  type="text"
                  value={quantity}
                  onChange={handleQuantityChange}
                  style={tdinputdrop}
                />
              </td>
            </tr>

            <tr>
              <td style={tdStyle}>
                <input
                  type="text"
                  value={deliverableNo}
                  onChange={handleDeliverableNoChange}
                  style={inputStyle}
                />
              </td>
              <td style={tdStyle}>
                <select value={platform} onChange={handlePlatformChange} style={tdinputdrop}>
                  <option value="">Select Platform</option>
                  <option value="Platform 1">Platform 1</option>
                  <option value="Platform 2">Platform 2</option>
                  <option value="Platform 3">Platform 3</option>
                </select>
              </td>
              <td style={tdStyle}>
                <select value={typeOfDeliverable} onChange={handleTypeOfDeliverableChange} style={tdinputdrop}>
                  <option value="">Select Type</option>
                  <option value="Type 1">Type 1</option>
                  <option value="Type 2">Type 2</option>
                  <option value="Type 3">Type 3</option>
                </select>
              </td>
              <td style={tdStyle}>
                <input
                  type="text"
                  value={quantity}
                  onChange={handleQuantityChange}
                  style={tdinputdrop}
                />
              </td>
            </tr>

          </tbody>
        </table>
  
        <button type="button" onClick={handleAddDeliverable} style={addDeliverable}>
          Add Deliverable
        </button>
      </div>
  

    </form>
  );
            };  


// Second
const ContactForm = () => {
  const [campaignBudget, setCampaignBudget] = useState("");
  const [creatorGender, setCreatorGender] = useState("");
  const [creatorLocation, setCreatorLocation] = useState("");
  const [followingMin, setFollowingMin] = useState("");
  const [followingMax, setFollowingMax] = useState("");
  const [contentCategory, setContentCategory] = useState("");
  const [creatorEmail, setCreatorEmail] = useState("");
  const [creatorPhone, setCreatorPhone] = useState("");

  const handleCampaignBudgetChange = (event) => {
    setCampaignBudget(event.target.value);
  };

  const handleCreatorGenderChange = (event) => {
    setCreatorGender(event.target.value);
  };

  const handleCreatorLocationChange = (event) => {
    setCreatorLocation(event.target.value);
  };

  const handleFollowingMinChange = (event) => {
    setFollowingMin(event.target.value);
  };

  const handleFollowingMaxChange = (event) => {
    setFollowingMax(event.target.value);
  };

  const handleContentCategoryChange = (event) => {
    setContentCategory(event.target.value);
  };

  const handleCreatorEmailChange = (event) => {
    setCreatorEmail(event.target.value);
  };

  const handleCreatorPhoneChange = (event) => {
    setCreatorPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission or data handling here

    // Reset form fields
    setCampaignBudget("");
    setCreatorGender("");
    setCreatorLocation("");
    setFollowingMin("");
    setFollowingMax("");
    setContentCategory("");
    setCreatorEmail("");
    setCreatorPhone("");
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const headingStyle = {
    marginBottom: "10px",

    color: "#000",
    fontFamily: "Montserrat",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  };

  const labelStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    marginBottom: "10px",

    color: "#000",
    fontFamily: "Montserrat",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const inputStyle = {
    padding: "5px",
    width: "380px",
    height: "30px",
    borderRadius: "5px",
    border: "1.3px solid #9CABFD"
  };

  const budgetinputStyle = {
    padding: "5px",
    width: "666px",
    height: "43px",
    borderRadius: "5px",
    border: "1.3px solid #9CABFD"
  };

  const dropinputStyle = {
    padding: "5px",
    width: "102px",
    height: "36px",
    border: "1px solid #9CABFD",
    background: "#D4D3FF",
    borderRadius: "5px",
    border: "1.3px solid #9CABFD"
  };


  const buttonStyle = {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const rcontainerStyle = {
    display: "flex",
    flexWrap: "wrap",
  };
  
  const radioLabelStyle = {
    alignItems: "center",
    borderRadius: "5px",
    border: "1.3px solid #9CABFD",
    padding: "10px",
    width: "223px",
    height: "30px",
    alignItems: "center",
    marginRight: "20px",
  };
  
  const radioBoxStyle = {
    marginRight: "5px",
    display: "inline-block",
    marginTop: "10px",
    marginLeft: "110px",
  };

  const budgetplaceholderStyle = {
    fontWeight: "bold",
    fontSize: "30px"
  };

  const placeholderStyle = {
    color: "#717171",
    fontFamily: "Montserrat",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal"
  };

  const numberOptions = [
    { value: "", label: "Any" },
    { value: "1000", label: "1,000" },
    { value: "5000", label: "5,000" },
    { value: "10000", label: "10,000" },
    { value: "50000", label: "50,000" },
  ];
  

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div>
        <h2 style={headingStyle}>Campaign Budget</h2>
        <label style={labelStyle}>
          Budget
          <input
            type="text"
            value={campaignBudget}
            onChange={handleCampaignBudgetChange}
            style={{ ...budgetinputStyle, ...budgetplaceholderStyle }}
            placeholder="₹"
          />
        </label>
      </div>

      <div>
        <h2 style={headingStyle}>Campaign Preferences</h2>
        <label style={labelStyle}>
          Creator Gender
          <input
            type="text"
            value={creatorGender}
            onChange={handleCreatorGenderChange}
            style={{...inputStyle, ...placeholderStyle}}
            placeholder="Enter Name of Your Campaign"
          />
        </label>
        <label style={labelStyle}>
          Creator Location
          <input
            type="text"
            value={creatorLocation}
            onChange={handleCreatorLocationChange}
            style={{...inputStyle, ...placeholderStyle}}
            placeholder="Enter Name of Your Brand"
          />
        </label>


        <div style={{ display: "flex", gap: "10px" }}>
    <label style={labelStyle}>
      Minimum
      <select value={followingMin} onChange={handleFollowingMinChange} style={dropinputStyle}>
        {numberOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
    <label style={labelStyle}>
      Maximum
      <select value={followingMax} onChange={handleFollowingMaxChange} style={dropinputStyle}>
        {numberOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  </div>





    <div style={rcontainerStyle}>
    <label style={labelStyle}>
      Content Category:
      <div>
        <label style={radioLabelStyle}>
        Family
          <div style={radioBoxStyle}>
            <input
              type="radio"
              value="family"
              checked={contentCategory === "family"}
              onChange={handleContentCategoryChange}
            />
          </div>
        </label>
        
        <label style={radioLabelStyle}>
        Beauty
          <div style={radioBoxStyle}>
            <input
              type="radio"
              value="beauty"
              checked={contentCategory === "beauty"}
              onChange={handleContentCategoryChange}
            />
          </div>
          
        </label>
        <label style={radioLabelStyle}>
        Fashion
          <div style={radioBoxStyle}>
            <input
              type="radio"
              value="fashion"
              checked={contentCategory === "fashion"}
              onChange={handleContentCategoryChange}
            />
          </div>
          
        </label>
        <label style={radioLabelStyle}>
          Gaming
          <div style={radioBoxStyle}>
            <input
              type="radio"
              value="more"
              checked={contentCategory === "more"}
              onChange={handleContentCategoryChange}
            />
          </div>
          
        </label>
      </div>
    </label>
  </div>
      </div>

      <div>
    <h2 style={headingStyle}>Creator Contact</h2>
    <div style={containerStyle}>
      <label style={labelStyle}>
        Creator Email
        <input
          type="email"
          value={creatorEmail}
          onChange={handleCreatorEmailChange}
          style={{...inputStyle, ...placeholderStyle}}
          placeholder="Enter contact email of your Brand"
        />
      </label>
      <label style={{ ...labelStyle, marginLeft: "20px" }}>
        Creator Phone Number
        <input
          type="tel"
          value={creatorPhone}
          onChange={handleCreatorPhoneChange}
          style={{...inputStyle, ...placeholderStyle}}
          placeholder="Enter contact number of your Brand"
        />
      </label>
    </div>
  </div>


    </form>
  );
};


const PersonalForm = () => {
  const { control } = useFormContext();
  return (
    <>
      {/* Personal form fields */}
    </>
  );
};

const PaymentForm = () => {
  const { control } = useFormContext();
  return (
    <>
      {/* Payment form fields */}
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    default:
      return "unknown step";
  }
}

export const FormCampaign = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  const handleComplete = () => {
    setActiveStep(steps.length);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form>
              {getStepContent(activeStep)}

              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleComplete}
                >
                  Finish
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};