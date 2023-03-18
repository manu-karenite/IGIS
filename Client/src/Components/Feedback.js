import React from "react";
import styles from "./Feedback.module.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
const Feedback = ({ color }) => {
  return (
    <div className={styles.feedback} style={{ backgroundColor: color }}>
      <Link to="/" style={{ color: "white" }}>
        <HomeIcon sx={{ fontSize: 40 }} />
      </Link>
      <div className={styles.mid}>
        {" "}
        <div className={styles.feedback_left}>
          {" "}
          Want to help us getting a testcase?
        </div>
        <div className={styles.feedback_right}>Please Visit Here &rarr;</div>
      </div>
      <div className={styles?.last}>
        <div>
          <Link to="/aadhar-validation">
            <button style={{ backgroundColor: color }}>
              Aadhar Validation
            </button>
          </Link>
        </div>
        <div>
          <Link to="/face-aging">
            <button style={{ backgroundColor: color }}>Face Aging</button>
          </Link>
        </div>
        <div>
          <Link to="/deblurring">
            <button style={{ backgroundColor: color }}>Deblurring</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
