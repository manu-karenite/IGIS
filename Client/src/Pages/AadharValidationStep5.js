import React from "react";
import styles from "../CSS/AadharValidationStep5.module.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { compareImages } from "../API/aadharValidation.js";
import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from "react-router-dom";
import Feedback from "../Components/Feedback.js";
import { Helmet } from "react-helmet";
const steps = [
  {
    label: "Click or Upload AADHAR Picture",
    description: `Curabitur euismod hendrerit eros, sit amet vestibulum arcu faucibus id. Fusce et finibus sem, id luctus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat odio justo, ut lobortis erat tempus sit amet. In pellentesque orci ac lorem tristique, ut congue dolor hendrerit.`,
  },
  {
    label: "Retrieve Age and Sex from AADHAR",
    description:
      "Curabitur euismod hendrerit eros, sit amet vestibulum arcu faucibus id. Fusce et finibus sem, id luctus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat odio justo, ut lobortis erat tempus sit amet. In pellentesque orci ac lorem tristique, ut congue dolor hendrerit.",
  },
  {
    label: "Click or Upload Current Picture",
    description: `Curabitur euismod hendrerit eros, sit amet vestibulum arcu faucibus id. Fusce et finibus sem, id luctus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat odio justo, ut lobortis erat tempus sit amet. In pellentesque orci ac lorem tristique, ut congue dolor hendrerit.`,
  },
  {
    label: "Retrieve Age and Sex from Current Picture",
    description:
      "Curabitur euismod hendrerit eros, sit amet vestibulum arcu faucibus id. Fusce et finibus sem, id luctus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat odio justo, ut lobortis erat tempus sit amet. In pellentesque orci ac lorem tristique, ut congue dolor hendrerit.",
  },
  {
    label: "Evaluation",
    description: `Curabitur euismod hendrerit eros, sit amet vestibulum arcu faucibus id. Fusce et finibus sem, id luctus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat odio justo, ut lobortis erat tempus sit amet. In pellentesque orci ac lorem tristique, ut congue dolor hendrerit.`,
  },
  {
    label: "Accept or Reject",
    description: `Curabitur euismod hendrerit eros, sit amet vestibulum arcu faucibus id. Fusce et finibus sem, id luctus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat odio justo, ut lobortis erat tempus sit amet. In pellentesque orci ac lorem tristique, ut congue dolor hendrerit.`,
  },
];

const AadharValidationStep5 = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState("");
  const getAnswer = (link1, link2) => {
    console.log(link1, link2);
    compareImages(link1, link2)
      .then((res) => setError(res.data.msg))
      .catch((err) => console.log(err));
  };
  const [ls1, setLs1] = React.useState(null);
  const [ls2, setLs2] = React.useState(null);
  React.useEffect(() => {
    if (window && window.localStorage) {
      const data1 = JSON.parse(window.localStorage.getItem("step1"));
      const data2 = JSON.parse(window.localStorage.getItem("step3"));
      console.log(data1, data2);
      setLs1(data1);
      setLs2(data2);
      getAnswer(data1?.img_link, data2?.img_link);
    }
  }, [window, window.localStorage]);
  const delay = 4;
  React.useEffect(
    () => {
      let timer1 = setTimeout(() => {
        window.localStorage.setItem("mse", JSON.stringify(error));
        navigate("/aadhar-validation/step6");
      }, delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      console.log("hello");
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    [error]
  );
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ImageMe | Aadhar | Step 5</title>
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
            <Stepper activeStep={4} alternativeLabel>
              {steps.map((label) => (
                <Step key={label?.label}>
                  <StepLabel>{label?.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
      </div>

      <div className={styles?.panel}>
        <div className={styles?.stepTitle}>Evaluation</div>
      </div>
      <div className={styles?.row_outer}>
        <div>
          <div className={styles?.image}>
            <img src={ls1?.img_link} alt="pic1" />
          </div>
          <div className={styles?.details}>Age (approximate) : {ls1?.age}</div>
          <div className={styles?.details}>Gender: {ls1?.gender}</div>
          <div className={styles?.details}>
            genderProbability: {ls1?.genderProbability}
          </div>
        </div>
        <div>
          <HashLoader
            color={"#4b56d2"}
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        <div>
          <div className={styles?.image}>
            {" "}
            <img src={ls2?.img_link} alt="pic1" />
          </div>
          <div className={styles?.details}>Age (approximate) : {ls2?.age}</div>
          <div className={styles?.details}>Gender: {ls2?.gender}</div>
          <div className={styles?.details}>
            genderProbability: {ls2?.genderProbability}
          </div>
        </div>
      </div>
    </>
  );
};

export default AadharValidationStep5;
