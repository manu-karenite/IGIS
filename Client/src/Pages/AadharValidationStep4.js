import React from "react";
import styles from "../CSS/AadharValidationStep4.module.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

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

const AadharValidationStep4 = () => {
  return (
    <>
      <div className={styles.feedback}>
        {" "}
        <div className={styles.feedback_left}>
          Want to help us getting a testcase?{" "}
        </div>
        <div className={styles.feedback_right}>Please Visit Here &rarr;</div>{" "}
      </div>
      <div className={styles.preface}>
        <div>
          <img
            src="https://res.cloudinary.com/techbuy/image/upload/v1672237814/aadhar_logo_va4cp0.png"
            alt="aadhar logo"
            height="100px"
          />
        </div>
        <div className={styles?.preface_right}>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={3} alternativeLabel>
              {steps.map((label) => (
                <Step key={label?.label}>
                  <StepLabel>{label?.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
      </div>
    </>
  );
};

export default AadharValidationStep4;
