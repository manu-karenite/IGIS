import React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import styles from "../CSS/FaceAgingStep1.module.css";
import Resizer from "react-image-file-resizer";
import CircleLoader from "react-spinners/CircleLoader";
import { useNavigate } from "react-router-dom";
import { aadharValidation } from "../API/faceAging.js";

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
const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      720,
      720,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });
const FaceAgingStep1 = () => {
  const [imgLink, setImgLink] = React.useState(null);
  let [loadingSpinner, setLoadingSpinner] = React.useState(false);
  let [color, setColor] = React.useState("#ffba50");
  const navigate = useNavigate();
  const uploadImageHandler = async (e) => {
    setLoadingSpinner(true);
    try {
      const file = e.target.files[0];
      const image = await resizeFile(file);
      console.log(image);
      aadharValidation(image)
        .then((res) => {
          setImgLink(res?.data?.msg);
          setLoadingSpinner(false);
        })
        .catch((err) => {
          console.log(err);
          setLoadingSpinner(false);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const finalHandle = () => {
    if (window && window.localStorage) {
      window.localStorage.setItem(
        "faceaging_step1",
        JSON.stringify({
          img_link: imgLink,
        })
      );
    }
    navigate("/face-aging/step2");
  };
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
            <Stepper activeStep={0} alternativeLabel>
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
        <div className={styles?.stepTitle}>Upload Image</div>
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
                color={color}
                loading={loadingSpinner}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              {loadingSpinner && (
                <h3 style={{ textAlign: "center" }}>
                  Please Wait while we Upload we your Image
                </h3>
              )}
            </center>
          </div>
        </div>
        {imgLink && (
          <div className={styles?.uploadedImage}>
            <img src={imgLink} alt="uploadedImage" />
          </div>
        )}
        <div className={styles.customFile}>
          <center>
            <input
              type="file"
              id="customFile"
              accept="image/png, image/jpeg, image/jpg"
              onChange={(e) => uploadImageHandler(e)}
            />
          </center>
        </div>
      </div>
      {!loadingSpinner && (
        <div className={styles?.panel}>
          <button onClick={finalHandle}>Continue to Step 2</button>
        </div>
      )}
    </>
  );
};

export default FaceAgingStep1;
