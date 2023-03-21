import React from "react";
import styles from "../CSS/AadharValidationStep2.module.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import GridLoader from "react-spinners/GridLoader";
import { useNavigate } from "react-router-dom";
import Feedback from "../Components/Feedback.js";
import { Helmet } from "react-helmet";
const steps = [
  {
    label: "Click or Upload AADHAR Picture",
    description: `Curabitur euismod hendrerit eros, sit amet vestibulum arcu faucibus id. Fusce et finibus sem, id luctus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat odio justo, ut lobortis erat tempus sit amet. In pellentesque orci ac lorem tristique, ut congue dolor hendrerit.`,
  },
  {
    label: "Retrieve Age and Sex from AADHAR",
    description:
      "Curabitur euismod hendrerit eros, sit amet vestibulum arcu faucibus id. Fusce et finibus sem, id luctus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat odio justo, ut lobortis erat tempus sit amet. In pellentesque orci ac lorem tristique, ut congue dolor hendrerit.",
  },
  {
    label: "Click or Upload Current Picture",
    description: `Curabitur euismod hendrerit eros, sit amet vestibulum arcu faucibus id. Fusce et finibus sem, id luctus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat odio justo, ut lobortis erat tempus sit amet. In pellentesque orci ac lorem tristique, ut congue dolor hendrerit.`,
  },
  {
    label: "Retrieve Age and Sex from Current Picture",
    description:
      "Curabitur euismod hendrerit eros, sit amet vestibulum arcu faucibus id. Fusce et finibus sem, id luctus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat odio justo, ut lobortis erat tempus sit amet. In pellentesque orci ac lorem tristique, ut congue dolor hendrerit.",
  },
  {
    label: "Compare and Contrast",
    description: `Curabitur euismod hendrerit eros, sit amet vestibulum arcu faucibus id. Fusce et finibus sem, id luctus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat odio justo, ut lobortis erat tempus sit amet. In pellentesque orci ac lorem tristique, ut congue dolor hendrerit.`,
  },
  {
    label: "Accept or Reject",
    description: `Curabitur euismod hendrerit eros, sit amet vestibulum arcu faucibus id. Fusce et finibus sem, id luctus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat odio justo, ut lobortis erat tempus sit amet. In pellentesque orci ac lorem tristique, ut congue dolor hendrerit.`,
  },
];

const delay = 3;
const AadharValidationStep2 = () => {
  const navigate = useNavigate();
  let [loadingSpinner, setLoadingSpinner] = React.useState(true);
  let [color, setColor] = React.useState("#4b56d2");
  const [show, setShow] = React.useState(true);
  const [data, setData] = React.useState(null);
  React.useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(false), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      if (window && window.localStorage) {
        const result = JSON.parse(window.localStorage.getItem("step1"));
        setData(result);
      }
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    []
  );
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ImageMe | Aadhar | Step 2</title>
      </Helmet>
      <Feedback color="#4b56d2" />

      <div className={styles.preface}>
        <div>
          <img
            src="https://res.cloudinary.com/techbuy/image/upload/v1672237814/aadhar_logo_va4cp0.png"
            alt="aadhar logo"
            height="100px"
            onClick={() => navigate("/aadhar-validation")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={styles?.preface_right}>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label?.label}>
                  <StepLabel>{label?.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
      </div>
      <div className={styles?.uploadOuter}>
        <div className={styles?.stepTitle}>
          Retrieving Age and Sex from AADHAR
        </div>
        {show && (
          <div className={styles?.panel}>
            <div className="sweet-loading">
              {/* <button onClick={() => setLoadingSpinner(!loadingSpinner)}>
          Toggle Loader
        </button>
        <input
          value={color}
          onChange={(input) => setColor(input.target.value)}
          placeholder="Color of the loader"
        /> */}

              <center>
                <GridLoader
                  color={color}
                  loading={loadingSpinner}
                  size={30}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                {loadingSpinner && (
                  <h3 style={{ textAlign: "center" }}>
                    Please Wait while we process your image
                  </h3>
                )}
              </center>
            </div>
          </div>
        )}
        {/* <WebcamCapture /> */}
        {!show && (
          <div className={styles?.panel}>
            <div className={styles?.image_row}>
              <img
                className={styles?.image}
                src={data?.img_link}
                alt="aadhar_picture"
              />
            </div>
          </div>
        )}
      </div>
      {!show && (
        <div className={styles?.result}>
          <div>Age (approximate) : {data?.age}</div>

          <div>Gender: {data?.gender}</div>
          <div>genderProbability: {data?.genderProbability}</div>
        </div>
      )}
      {!show && (
        <div className={styles?.panel} style={{ marginTop: "20px" }}>
          <button onClick={() => navigate("/aadhar-validation/step3")}>
            Continue to Step 3
          </button>
        </div>
      )}
    </>
  );
};

export default AadharValidationStep2;
