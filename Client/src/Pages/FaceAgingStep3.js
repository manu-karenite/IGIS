import React from "react";
import styles from "../CSS/FaceAgingStep3.module.css";

import { useNavigate } from "react-router-dom";
import { generateVideo, generateImage } from "../API/faceAging";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const steps = [
  {
    label: "Upload Picture",
  },
  {
    label: "Select your Preference",
  },
  {
    label: "Result",
  },
];
const delay = 3;
const FaceAgingStep3 = () => {
  const navigate = useNavigate();
  const [imgLink, setImgLink] = React.useState(null);
  const [controls, setControls] = React.useState(null);
  const [show, setShow] = React.useState(true);
  const [result, setResult] = React.useState(
    "https://cdn.dribbble.com/users/2869863/screenshots/6047846/media/7e168a28d4e9120cdfbecb41ba08e4b5.gif"
  );
  React.useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(false), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      if (window && window.localStorage) {
        const result1 = JSON.parse(
          window.localStorage.getItem("faceaging_step1")
        );
        setImgLink(result1?.img_link);
        const result2 = JSON.parse(
          window.localStorage.getItem("faceaging_step2")
        );
        setControls(result2);
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
  const callFunction = () => {
    if (controls?.video === true) {
      generateVideo(imgLink)
        .then((res) => {
          console.log(res);
          setResult(res?.data?.msg);
        })
        .catch((err) => console.log(err));
    } else if (controls?.video === false) {
      generateImage(imgLink, controls?.age)
        .then((res) => setResult(res?.data?.msg))
        .catch((err) => console.log(err));
    }
  };
  React.useEffect(() => {
    imgLink && callFunction();
  }, [imgLink]);
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
            src="https://res.cloudinary.com/pet-life/image/upload/v1677993158/Screenshot_2023-03-05_104108_ltp1uz.png"
            alt="aadhar logo"
            height="120px"
            onClick={() => navigate("/face-aging")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={styles?.preface_right}>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={2} alternativeLabel>
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
        <div className={styles?.stepTitle}>Result</div>
      </div>
      <div className={styles?.row_outer}>
        <div>
          <div className={styles?.image}>
            <img src={imgLink} alt="pic1" />
          </div>
        </div>
        {result ===
          "https://cdn.dribbble.com/users/2869863/screenshots/6047846/media/7e168a28d4e9120cdfbecb41ba08e4b5.gif" && (
          <div>
            <ClimbingBoxLoader
              color={"#ffba50"}
              loading={true}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        <div>
          <div className={styles?.image}>
            {" "}
            <img src={result} alt="pic1" />
          </div>
        </div>
      </div>
      {result !==
        "https://cdn.dribbble.com/users/2869863/screenshots/6047846/media/7e168a28d4e9120cdfbecb41ba08e4b5.gif" && (
        <div className={styles?.out_row}>
          <div className={styles?.panel}>
            <button
              onClick={() => {
                window.localStorage.removeItem("faceaging_step2");
                navigate("/face-aging/step2");
              }}
            >
              Restart
            </button>
          </div>
          <div
            className={styles?.panel}
            onClick={() => {
              window.localStorage.removeItem("faceaging_step1");
              window.localStorage.removeItem("faceaging_step2");
              navigate("/face-aging");
            }}
          >
            <button>Home</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FaceAgingStep3;
