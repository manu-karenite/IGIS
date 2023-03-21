import React from "react";
import WarningModal from "../Components/WarningModal.js";
import styles from "../CSS/FaceAging.module.css";
import Feedback from "../Components/Feedback.js";
import { Helmet } from "react-helmet";
const FaceAging = () => {
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
        <title>ImageMe | Face Aging</title>
      </Helmet>
      <WarningModal
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        path="/face-aging/step1"
        text="Face Aging"
        color="#ffa500"
      />
      <Feedback color="#ffa500" />

      <div className={styles.canvas}>
        <div className={styles.first}>Face Aging Model</div>
        <div className={styles.canvas_quote}>
          "Ageing is just another word for living." - Cindy Joseph
        </div>
        <div className={styles.canvas_img}>
          <center>
            <img
              src="https://res.cloudinary.com/techbuy/image/upload/v1677823047/2195_mrxlho.jpg"
              alt="face-aging-wallpaer"
            />
          </center>
        </div>
        <br />
      </div>
      <div className={styles?.pretext}>
        <div className={styles?.pretext_left}>
          <div className={styles?.pretext_zero}>
            At ImageMe / Face Aging, we
          </div>
          <div className={styles?.pretext_one}>
            Reimagine Life through the power of AI & Deep Learning to Recreate
            YOU.!
          </div>
          <div className={styles?.pretext_content}>
            We are creating Face Aging Application, with the options to set
            custom preferences for the same. Uses GANs to produce the Desired
            Image with Lively Output.
          </div>
          <div className={styles?.btn}>Wish to Start? </div>
        </div>
        <div className={styles?.pretext_right}>
          <img
            className={styles?.father}
            src="https://res.cloudinary.com/pet-life/image/upload/v1679342070/image_24fathger_tgtnue.png"
            alt="boy"
          />
          <img
            className={styles?.father}
            src="https://res.cloudinary.com/pet-life/image/upload/v1679342070/image_24fathger_tgtnue.png"
            alt="boy"
          />
          <img
            className={styles?.boy}
            src="https://res.cloudinary.com/pet-life/image/upload/v1679342069/image_7son_wxkf0t.png"
            alt="boy"
          />
          <img
            className={styles?.boy}
            src="https://res.cloudinary.com/pet-life/image/upload/v1679342069/image_7son_wxkf0t.png"
            alt="boy"
          />
          <img
            className={styles?.vector}
            src="https://res.cloudinary.com/pet-life/image/upload/v1679341939/Vectorb_hibc15.png"
            alt="vector"
          />
        </div>
      </div>
      <div className={styles.finalStart}>
        <button onClick={handleStep1}>Start Now</button>
      </div>
    </>
  );
};

export default FaceAging;
