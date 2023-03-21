import React from "react";
import styles from "./../CSS/DeblurringStep2.module.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useNavigate } from "react-router-dom";
import { deblurringResult } from "../API/deblurring.js";
import FadeLoader from "react-spinners/FadeLoader";
import Feedback from "../Components/Feedback.js";
import { Helmet } from "react-helmet";
const steps = [
  {
    label: "Upload Picture",
  },

  {
    label: "Result",
  },
];
const DeblurringStep2 = () => {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [result, setResult] = React.useState(null);
  let [color, setColor] = React.useState("#8fa600");
  let [loadingSpinner, setLoadingSpinner] = React.useState(true);
  const delay = 1;
  React.useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(false), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      if (window && window.localStorage) {
        const result = JSON.parse(
          window.localStorage.getItem("deblurring_step1")
        );
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
  const getResult = () => {
    deblurringResult(data?.img_link)
      .then((res) => {
        setResult(res?.data);
        setLoadingSpinner(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingSpinner(false);
      });
  };
  React.useEffect(() => {
    data && getResult();
  }, [data]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ImageMe | Deblurring | Step 2</title>
      </Helmet>
      <Feedback color="#babc4c" />

      <div className={styles.preface}>
        <div>
          <img
            src="https://res.cloudinary.com/pet-life/image/upload/v1679164882/faces-logo-27011216_sltkon.png"
            alt="aadhar logo"
            height="120px"
            onClick={() => navigate("/deblurring")}
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
        <div className={styles?.stepTitle}>Generating Results</div>

        {/* <WebcamCapture /> */}
        {data && (
          <>
            <div className={styles?.panel}>
              <div className={styles?.image_row}>
                <img
                  className={styles?.image}
                  src={data?.img_link}
                  alt="aadhar_picture"
                />
              </div>
            </div>
            <div className={styles?.panel}>
              <div className={styles?.image_row}>
                <img
                  className={styles?.image}
                  height="80px"
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjQzNTQ5ZTY0NWZkMTNiYjkxZjU5ZmM2YTE0Mjc1MmJjY2I2ZGJmNyZjdD1z/h5RfJOwdDlIqpkycmO/giphy.gif"
                  alt="aadhar_picture"
                />
              </div>
            </div>
          </>
        )}
        {loadingSpinner && (
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
                <FadeLoader
                  color={color}
                  loading={loadingSpinner}
                  size={80}
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
      </div>
      {!loadingSpinner && (
        <div className={styles?.results}>
          {result?.msg?.map((element) => {
            return <img src={element?.image} alt="row" />;
          })}
        </div>
      )}
      {!loadingSpinner && (
        <div className={styles?.out_row}>
          <div
            className={styles?.panel}
            onClick={() => {
              window.localStorage.removeItem("deblurring_step1");

              navigate("/deblurring");
            }}
          >
            <button>Home</button>
          </div>
        </div>
      )}
    </>
  );
};

export default DeblurringStep2;
