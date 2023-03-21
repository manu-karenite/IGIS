import React from "react";

import styles from "../CSS/AadharValidation.module.css";
import Steps from "../Components/Steps.js";
import List from "../Components/List.js";
import WarningModal from "../Components/WarningModal.js";
import { useNavigate } from "react-router-dom";
import Feedback from "../Components/Feedback.js";
import { Helmet } from "react-helmet";
const AaadharValidation = () => {
  //for Warning Modal
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleStep1 = () => {
    console.log("Button Clicked");
    handleOpen();
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ImageMe | Aadhar Validation</title>
      </Helmet>
      <>
        <WarningModal
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
          path="/aadhar-validation/step1"
          text="Aadhar Verification"
          color="#4b56d2"
        />{" "}
        <Feedback color="#4b56d2" />
        <div className={styles.canvas}>
          <div className={styles.canvas_left}>
            <img
              src="https://res.cloudinary.com/techbuy/image/upload/v1672237814/aadhar_logo_va4cp0.png"
              alt="Aadhar Logo"
              onClick={() => navigate("/aadhar-validation")}
            />
          </div>
          <div className={styles.canvas_right}>
            <div className={styles.first}>Aadhar Verification</div>
            <br />
            <div className={styles.second}>
              Verify Client’s Identity <br />
              Realtime x AADHAR Verification
            </div>
            <br />
            <br />
            <div className={styles.third}>“ Securing India Digitally ”</div>
            <div style={{ color: "white", marginTop: "10px" }}>
              &copy; ImageMe
            </div>
          </div>
        </div>
        <div className={styles.phase2}>
          <div className={styles.phase2_left}>
            <center>
              <Steps />
            </center>
          </div>
          <div className={styles.phase2_right}>
            <center>
              <List />
            </center>
          </div>
        </div>
        <div className={styles.finalStart}>
          <button onClick={handleStep1}>Start Now</button>
        </div>
      </>
    </>
  );
};

export default AaadharValidation;
