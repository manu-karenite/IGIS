import React from "react";

import styles from "../CSS/Deblurring.module.css";
import Steps from "../Components/Steps.js";
import List from "../Components/List.js";
import WarningModal from "../Components/WarningModal.js";
import { useNavigate } from "react-router-dom";
import Feedback from "../Components/Feedback.js";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>ImageMe | Deblurring</title>
      </Helmet>
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
              When Life Gets Blurry, <br />
              Adjust your Focus
            </div>
            <br />
            <br />
            <div className={styles.third}>
              “ Captures Intricate Details of Image ”
            </div>
          </div>
        </div>
        <div className={styles?.bg}>
          <div className={styles?.bg_right}>
            <img
              src="https://res.cloudinary.com/pet-life/image/upload/v1679340886/helkllo_1_g0dthv.png"
              alt="cover_right"
            />
          </div>
          <div className={styles?.bg_left}>
            <div className={styles?.bg_left_one}>IT'S NITTY & GRITTY!</div>
            <div className={styles?.bg_left_two}>An Image Deblurring App</div>
            <div className={styles?.bg_left_three}>
              That Does More than Wanted!
            </div>
            <div className={styles?.bg_left_four}>
              <button>Try For Free</button>
            </div>
            <div className={styles?.bg_left_five}>&copy; ImageMe</div>
          </div>
          <div className={styles?.bg_right}>
            <img
              src="https://res.cloudinary.com/pet-life/image/upload/v1679340431/helkllo_1_qhunud.png"
              alt="cover_right"
            />
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
