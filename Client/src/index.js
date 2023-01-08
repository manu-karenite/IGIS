import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//importing pages
import AadharValidation from "./Pages/AadharValidation.js";
import AadharValidationStep1 from "./Pages/AadharValidationStep1.js";
import AadharValidationStep2 from "./Pages/AadharValidationStep2.js";
import AadharValidationStep3 from "./Pages/AadharValidationStep3.js";
import AadharValidationStep4 from "./Pages/AadharValidationStep4.js";
import AadharValidationStep5 from "./Pages/AadharValidationStep5.js";
import AadharValidationStep6 from "./Pages/AadharValidationStep6.js";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/aadhar-validation", element: <AadharValidation /> },
  { path: "/aadhar-validation/step1", element: <AadharValidationStep1 /> },
  { path: "/aadhar-validation/step2", element: <AadharValidationStep2 /> },
  { path: "/aadhar-validation/step3", element: <AadharValidationStep3 /> },
  { path: "/aadhar-validation/step4", element: <AadharValidationStep4 /> },
  { path: "/aadhar-validation/step5", element: <AadharValidationStep5 /> },
  { path: "/aadhar-validation/step6", element: <AadharValidationStep6 /> },
]);

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
