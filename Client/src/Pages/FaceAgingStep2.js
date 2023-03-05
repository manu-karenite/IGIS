import React from "react";
import styles from "../CSS/FaceAgingStep2.module.css";

import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Slider from "@mui/material/Slider";
import CircleLoader from "react-spinners/CircleLoader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const FaceAgingStep2 = () => {
  const navigate = useNavigate();
  const [imgLink, setImgLink] = React.useState(null);
  const [show, setShow] = React.useState(true);
  let [loadingSpinner, setLoadingSpinner] = React.useState(true);
  const [value, setValue] = React.useState(30);
  const [video, setVideo] = React.useState(false);
  const finalHandle = () => {
    if (video === true) {
      if (window && window.localStorage) {
        window.localStorage.setItem(
          "faceaging_step2",
          JSON.stringify({
            video: video,
          })
        );
      }
    } else {
      if (window && window.localStorage) {
        window.localStorage.setItem(
          "faceaging_step2",
          JSON.stringify({
            video: video,
            age: value,
          })
        );
      }
    }

    navigate("/face-aging/step3");
  };
  React.useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(false), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      if (window && window.localStorage) {
        const result = JSON.parse(
          window.localStorage.getItem("faceaging_step1")
        );
        setImgLink(result?.img_link);
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
        <div className={styles?.stepTitle}>Select Image Preferences</div>
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
                <CircleLoader
                  color="#ffa500"
                  loading={loadingSpinner}
                  size={100}
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
        {!show && (
          <>
            <div className={styles?.uploadedImage}>
              <img src={imgLink} alt="uploadedImage" />
            </div>
            <div className={styles?.controls}>
              {" "}
              <div className={styles?.control_left}>
                {" "}
                <div>Preferences for Image</div>
                <Box sx={{ width: 300 }}>
                  <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    // getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={5}
                    marks
                    min={5}
                    max={100}
                    onChange={(e) => setValue(e.target?.value)}
                  />
                </Box>
                <div className={styles?.select_image_age}>
                  You selected {value}
                </div>
              </div>
              <div className={styles?.control_right}>
                {" "}
                <div>Preferences for TimeLapse</div>
                <center>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) => setVideo(e?.target?.checked)}
                        />
                      }
                      label="Generate a TimeLapse Video"
                    />
                  </FormGroup>
                </center>
              </div>
            </div>{" "}
            <div className={styles?.panel}>
              <button onClick={finalHandle}>Continue to Step 3</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FaceAgingStep2;
