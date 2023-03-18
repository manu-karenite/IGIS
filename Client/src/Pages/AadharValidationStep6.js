import React from "react";
import styles from "../CSS/AadharValidationStep6.module.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useNavigate } from "react-router-dom";
import Feedback from "../Components/Feedback.js";

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

const AadharValidationStep6 = () => {
  const navigate = useNavigate();
  const [data1, setData1] = React.useState({});
  const [data2, setData2] = React.useState({});
  const [mse, setMse] = React.useState("");
  const [result, setResult] = React.useState(true);

  React.useEffect(() => {
    if (window && window.localStorage) {
      setData1(JSON.parse(window.localStorage.getItem("step1")));
      setData2(JSON.parse(window.localStorage.getItem("step3")));
      setMse(JSON.parse(window.localStorage.getItem("mse")));
    }
  }, [window]);
  React.useEffect(() => {
    if (data1 && data2) {
      if (Math.abs(data1?.age - data2?.age) >= 4) {
        setResult(false);
      }
      console.log(data1?.age);
      console.log(Math.abs(data1?.age - data2?.age));
      if (mse > 100) {
        setResult(false);
      }
      if (data1?.gender !== data2?.gender) setResult(false);
      if (data1?.genderProbability <= 0.9 || data2?.genderProbability <= 0.9) {
        setResult(false);
      }
    }
  }, [data1, data2, mse]);

  return (
    <>
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
            <Stepper activeStep={5} alternativeLabel>
              {steps.map((label) => (
                <Step key={label?.label}>
                  <StepLabel>{label?.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
      </div>
      {result && (
        <div className={styles?.result}>
          <img
            src="https://icon-library.com/images/verified-icon-png/verified-icon-png-14.jpg"
            alt="correct"
          />
        </div>
      )}
      {!result && (
        <div className={styles?.result}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/face-recognition-error-2025190-1714098.png?f=avif&w=256"
            alt="correct"
          />
        </div>
      )}
      <div className={styles?.out_row}>
        <div className={styles?.panel}>
          <button
            onClick={() => {
              window.localStorage.removeItem("step1");
              window.localStorage.removeItem("step3");
              window.localStorage.removeItem("mse");
              navigate("/aadhar-validation/step1");
            }}
          >
            Restart
          </button>
        </div>
        <div
          className={styles?.panel}
          onClick={() => {
            window.localStorage.removeItem("step1");
            window.localStorage.removeItem("step3");
            window.localStorage.removeItem("mse");
            navigate("/");
          }}
        >
          <button>Home</button>
        </div>
      </div>
    </>
  );
};

export default AadharValidationStep6;
