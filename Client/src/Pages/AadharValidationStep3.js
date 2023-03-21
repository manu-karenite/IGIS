import React from "react";
import styles from "../CSS/AadharValidationStep1.module.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import GridLoader from "react-spinners/GridLoader";
import { Helmet } from "react-helmet";
import * as faceapi from "face-api.js";
import Webcam from "react-webcam";
import { aadharValidation } from "../API/aadharValidation.js";
import Resizer from "react-image-file-resizer";
import { useNavigate } from "react-router-dom";
import Feedback from "../Components/Feedback.js";

const steps = [
  {
    label: "Upload AADHAR Picture",
    description: `Curabitur euismod hendrerit eros, sit amet vestibulum arcu faucibus id. Fusce et finibus sem, id luctus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat odio justo, ut lobortis erat tempus sit amet. In pellentesque orci ac lorem tristique, ut congue dolor hendrerit.`,
  },
  {
    label: "Retrieve Age and Sex from AADHAR",
    description:
      "Curabitur euismod hendrerit eros, sit amet vestibulum arcu faucibus id. Fusce et finibus sem, id luctus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat odio justo, ut lobortis erat tempus sit amet. In pellentesque orci ac lorem tristique, ut congue dolor hendrerit.",
  },
  {
    label: "Upload Current Picture",
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
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};
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
const AadharValidationStep3 = () => {
  const [img, setImg] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [imgLink, setImgLink] = React.useState(null);
  const [data, setData] = React.useState({});
  const navigate = useNavigate();
  let [loadingSpinner, setLoadingSpinner] = React.useState(false);
  let [color, setColor] = React.useState("#4b56d2");
  const finalHandle = () => {
    aadharValidation(img)
      .then((res) => {
        setImgLink(res?.data?.msg);
        if (window && window.localStorage) {
          window.localStorage.setItem(
            "step3",
            JSON.stringify({
              img_link: res?.data?.msg,
              ...data,
            })
          );
        }
        navigate("/aadhar-validation/step4");
      })
      .catch((err) => console.log(err));
  };
  const handle = () => {
    setLoadingSpinner(true);
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
      console.log(imageUpload.files[0]);
      const images = await resizeFile(imageUpload.files[0]);
      setImg(images);
      image = await faceapi.bufferToImage(imageUpload.files[0]);
      // setImg(image);

      image.width = 400;
      image.height = 350;
      container.append(image);
      canvas = faceapi.createCanvasFromMedia(image);
      console.log(canvas);
      container.append(canvas);
      setLoadingSpinner(true);
      const displaySize = { width: image.width, height: image.height };
      faceapi.matchDimensions(canvas, displaySize);
      const detections = await faceapi
        .detectAllFaces(image, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptors()
        .withAgeAndGender();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      // faceapi.draw.drawDetections(canvas, resizedDetections);
      resizedDetections.forEach((result) => {
        const { age, gender, genderProbability } = result;
        setData({ age, gender, genderProbability });
        new faceapi.draw.DrawTextField(
          [`Age: ${age} years`, `Gender: ${gender} ${genderProbability})`],
          result.detection.box.bottomLeft
        );
      });
      setLoadingSpinner(false);
    });
  }
  React.useEffect(() => {
    img && start();
  }, [img]);
  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    faceapi.nets.ageGenderNet.loadFromUri("/models"),
  ]).then(start);
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

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ImageMe | Aadhar | Step 3</title>
      </Helmet>
      <Feedback color="#4b56d2" />

      <div className={styles.preface}>
        <div>
          <img
            src="https://res.cloudinary.com/techbuy/image/upload/v1672237814/aadhar_logo_va4cp0.png"
            alt="aadhar logo"
            height="100px"
            onClick={() => navigate("/aadhar-validation")}
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
        <div className={styles?.stepTitle}>Latest Picture Validation</div>
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
              <GridLoader
                color={color}
                loading={loadingSpinner}
                size={30}
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
        {/* <WebcamCapture /> */}

        <div className={styles?.panel}>
          <div id="uploads">
            <input
              className={styles?.button1}
              id="imageUpload"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handle}
            />
            {loading && <div>Loading the Image</div>}
          </div>
        </div>
        {!loadingSpinner && (
          <div className={styles?.panel}>
            <button onClick={finalHandle}>Continue to Step 4</button>
          </div>
        )}
      </div>
    </>
  );
};

export default AadharValidationStep3;
