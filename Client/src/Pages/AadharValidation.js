import React from "react";
import * as faceapi from "face-api.js";
import Webcam from "react-webcam";
import { aadharValidation } from "../API/aadharValidation.js";
import styles from "../CSS/AadharValidation.module.css";
import Steps from "../Components/Steps.js";
import List from "../Components/List.js";
import WarningModal from "../Components/WarningModal.js";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const AaadharValidation = () => {
  const [loading, setLoading] = React.useState(false);
  const [img, setImg] = React.useState(null);

  const WebcamCapture = () => (
    <Webcam
      audio={false}
      height={720}
      screenshotFormat="image/jpeg"
      width={1280}
      videoConstraints={videoConstraints}
      s
    >
      {({ getScreenshot }) => (
        <button
          onClick={() => {
            const imageSrc = getScreenshot();
            setImg(imageSrc);
          }}
        >
          Capture photo
        </button>
      )}
    </Webcam>
  );
  const handle = () => {
    setLoading(true);
  };

  async function start() {
    const imageUpload = document.getElementById("imageUpload");
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.width = 400;
    container.height = 350;
    container.style.marginTop = "50px";
    document.getElementById("uploads").append(container);

    let image;
    let canvas;
    //document.getElementById('uploads').append('Loaded')
    imageUpload.addEventListener("change", async () => {
      if (image) image.remove();
      if (canvas) canvas.remove();
      image = await faceapi.bufferToImage(imageUpload.files[0]);
      image.width = 400;
      image.height = 350;
      container.append(image);
      canvas = faceapi.createCanvasFromMedia(image);
      container.append(canvas);
      setLoading(true);
      const displaySize = { width: image.width, height: image.height };
      faceapi.matchDimensions(canvas, displaySize);
      const detections = await faceapi
        .detectAllFaces(image, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptors()
        .withAgeAndGender();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      resizedDetections.forEach((result) => {
        const { age, gender, genderProbability } = result;
        new faceapi.draw.DrawTextField(
          [`Age: ${age} years`, `Gender: ${gender} ${genderProbability})`],
          result.detection.box.bottomLeft
        ).draw(canvas);
      });
      setLoading(false);
    });
  }

  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    faceapi.nets.ageGenderNet.loadFromUri("/models"),
  ]).then(start);

  const finalHandle = () => {
    aadharValidation(img)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  //for Warning Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleStep1 = () => {
    console.log("Button Clicked");
    handleOpen();
  };
  return (
    <>
      <WarningModal
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        path="/aadhar-validation/step1"
      />{" "}
      <div className={styles.feedback}>
        {" "}
        <div className={styles.feedback_left}>
          Want to help us getting a testcase?{" "}
        </div>
        <div className={styles.feedback_right}>Please Visit Here &rarr;</div>{" "}
      </div>
      <div className={styles.canvas}>
        <div className={styles.canvas_left}>
          <img
            src="https://res.cloudinary.com/techbuy/image/upload/v1672237814/aadhar_logo_va4cp0.png"
            alt="Aadhar Logo"
          />
        </div>
        <div className={styles.canvas_right}>
          <div className={styles.first}>AADHAR VERIFICATION</div>
          <br />
          <div className={styles.second}>
            Verify Client’s Identity <br />
            Realtime x AADHAR Verification
          </div>
          <br />
          <br />
          <div className={styles.third}>“ Securing India Digitally ”</div>
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
    // <>

    //   <h1>Aadhar Validation</h1>
    //   <WebcamCapture />
    //   {img && JSON.stringify(img)}
    //   <div id="uploads">
    //     <input
    //       id="imageUpload"
    //       type="file"
    //       accept="image/png, image/jpeg, image/jpg"
    //       onChange={handle}
    //     />
    //     {loading && <div>Loading the Image</div>}
    //   </div>
    //   <button onClick={finalHandle}>Hello</button>
    // </>
  );
};

export default AaadharValidation;
