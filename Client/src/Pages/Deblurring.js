import React from "react";

import styles from "../CSS/Deblurring.module.css";
import Steps from "../Components/Steps.js";
import List from "../Components/List.js";
import WarningModal from "../Components/WarningModal.js";
import { useNavigate } from "react-router-dom";
import Feedback from "../Components/Feedback.js";

const Deblurring = () => {
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
      <>
        <WarningModal
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
          path="/deblurring/step1"
          text="Image Deblurring"
          color="#8fa600"
        />{" "}
        <Feedback color="#babc4c" />
        <div className={styles.canvas}>
          <div className={styles.canvas_left}>
            <img
              src="https://res.cloudinary.com/pet-life/image/upload/v1679164882/faces-logo-27011216_sltkon.png"
              alt="Aadhar Logo"
              onClick={() => navigate("/deblurring")}
            />
          </div>
          <div className={styles.canvas_right}>
            <div className={styles.first}>Image Deblurring</div>
            <br />
            <div className={styles.second}>
              When life gets blurry, <br />
              Adjust your Focus
            </div>
            <br />
            <br />
            <div className={styles.third}>---Image Improvement Module---</div>
          </div>
        </div>
        <div className={styles.finalStart}>
          <button onClick={handleStep1}>Start Now</button>
        </div>
      </>
    </>
  );
};

export default Deblurring;
