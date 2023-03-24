import React from "react";
import styles from "./CSS/App.module.css";
import CodeIcon from "@mui/icons-material/Code";
import LayersIcon from "@mui/icons-material/Layers";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Marquee from "react-fast-marquee";
import { HashLink } from "react-router-hash-link";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Feedback from "./Components/Feedback";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
function App() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ImageMe | Home</title>
      </Helmet>
      <Feedback color="#0d1f22" />
      <div className={styles.canvas}>
        <div className={styles.canvas_left}>
          <img
            src="https://res.cloudinary.com/pet-life/image/upload/v1679344425/2233141_k3nyxc.jpg"
            alt="hero"
          />
        </div>
        <div className={styles.canvas_right}>
          <div className={styles.canvas_right_one}>EXPLORE ~</div>
          <div className={styles.canvas_right_two}>THE NEW IMAGE WORLD </div>
          <div className={styles.canvas_right_three}>
            <img src={process.env.REACT_APP_LOGO} alt="logo" />{" "}
          </div>
        </div>
      </div>
      <div className={styles?.next_palette}>
        <div className={styles?.next_title}>Our Features</div>
        <div className={styles?.next_feature_list}>
          <div className={styles?.outer}>
            <div className={styles?.outer_img}>
              {" "}
              <img
                src="https://res.cloudinary.com/techbuy/image/upload/v1672237814/aadhar_logo_va4cp0.png"
                alt="logo"
              />
            </div>
            <div className={styles?.outer_meta}>
              <div className={styles?.title_next}>Aadhar Verification</div>
              <div className={styles?.hashtag_next}>#Comparison #Security</div>
              <div className={styles?.steps_next}>Steps : 6</div>
              <div className={styles?.description_next}>
                To Compare Aadhar Image with the Current Image of the User. To
                be considered as a security feature which can be used with
                versatile Aadhar.
              </div>
            </div>
            <div
              className={styles?.outer_button}
              onClick={() => navigate("/aadhar-validation")}
            >
              Try Now!
            </div>
          </div>

          <div className={styles?.outer}>
            <div className={styles?.outer_img}>
              {" "}
              <img
                src="https://res.cloudinary.com/pet-life/image/upload/v1679164882/faces-logo-27011216_sltkon.png"
                alt="logo"
              />
            </div>
            <div className={styles?.outer_meta}>
              <div className={styles?.title_next}>Image Deblurring</div>
              <div className={styles?.hashtag_next}>
                #HighQuality #Fragmentation
              </div>
              <div className={styles?.steps_next}>Steps : 2</div>
              <div className={styles?.description_next}>
                To denoise an image of blurred quality into a superclear image.
                Fragments the image to smaller regions using CNN to produce
                optimized results.
              </div>
            </div>
            <div
              className={styles?.outer_button}
              onClick={() => navigate("/deblurring")}
            >
              Try Now!
            </div>
          </div>

          <div className={styles?.outer}>
            <div className={styles?.outer_img}>
              {" "}
              <img
                src="https://res.cloudinary.com/pet-life/image/upload/v1679349753/Screenshot_2023-03-21_033154_jpgea1.png"
                alt="logo"
              />
            </div>
            <div className={styles?.outer_meta}>
              <div className={styles?.title_next}>Face Ageing</div>
              <div className={styles?.hashtag_next}>#GANs #Multipurpose</div>
              <div className={styles?.steps_next}>Steps : 3</div>
              <div className={styles?.description_next}>
                To create a timelapse video/image of a person with given image.
                Custom Preferences allowed too. Allows the Motion Video & Image
                to build in high accuracy.
              </div>
            </div>
            <div
              className={styles?.outer_button}
              onClick={() => navigate("/face-aging")}
            >
              Try Now!
            </div>
          </div>
        </div>
      </div>
      <div className={styles?.next_palette}>
        <div className={styles?.next_title}>Our Tech Stack</div>
        <Marquee pauseOnHover={true} gradient={false}>
          <img
            className={styles?.marq_img}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/270px-Python.svg.png"
            alt="marquee"
          />
          <img
            className={styles?.marq_img}
            src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/reactlogo_4.png?itok=LXFHZrKJ"
            alt="marquee"
          />
          <img
            className={styles?.marq_img}
            src="https://docs.altinn.studio/technology/tools/material-ui/material-ui-logo.svg"
            alt="marquee"
          />

          <img
            className={styles?.marq_img}
            src="https://yktoo.solutions/images/logos/cloudinary-logo.png"
            alt="marquee"
          />

          <img
            className={styles?.marq_img}
            src="https://user-images.githubusercontent.com/8939680/57233883-20344080-6fe5-11e9-8169-1eeb4c782683.png"
            alt="marquee"
          />
          <img
            className={styles?.marq_img}
            src="https://editor.analyticsvidhya.com/uploads/800882.png"
            alt="marquee"
          />
          <img
            className={styles?.marq_img}
            src="https://numpy.org/doc/stable/_static/numpylogo_dark.svg"
            alt="marquee"
          />
          <img
            className={styles?.marq_img}
            src="https://opensource.google/static/images/projects/os-projects-tensorflow.svg
"
            alt="marquee"
          />
          <img
            className={styles?.marq_img}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
            alt="marquee"
          />
          <img
            className={styles?.marq_img}
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894__340.png"
            alt="marquee"
          />
        </Marquee>
      </div>
      <div className={styles?.next_palette}>
        {" "}
        <div className={styles?.next_title}>Collaborators</div>
        <div className={styles?.next_collab}>
          <Stack direction="row" spacing={5}>
            <Avatar
              // onClick={() =>
              //   navigate("https://www.linkedin.com/in/ishan-kumar-093017191/")
              // }
              sx={{ height: "70px", width: "70px" }}
              alt="Ishan Kumar"
              src="https://media.licdn.com/dms/image/C4E03AQF9AiKUs8kaSA/profile-displayphoto-shrink_400_400/0/1632793665705?e=1684972800&v=beta&t=VwX_SZtPu5TcbpZjH4l76-oyUZB83lWFC86n0r1oeXg"
            />
            <Avatar
              // onClick={() =>
              //   navigate("/https://www.linkedin.com/in/manavesh-narendra/")
              // }
              sx={{ height: "70px", width: "70px" }}
              alt="Manavesh Narendra"
              src="https://media.licdn.com/dms/image/D5603AQHfo8b6Zy96xg/profile-displayphoto-shrink_400_400/0/1675017029543?e=1684972800&v=beta&t=Ti4gDdIdPnpF0l7Uewe8W7ITlGvpFus82Lu0JSu2TNo"
            />
            <Avatar
              // onClick={() =>
              //   navigate("https://www.linkedin.com/in/anshumali-bhardwaj/")
              // }
              sx={{ height: "70px", width: "70px" }}
              alt="Anshumali Bharadwaj"
              src="https://media.licdn.com/dms/image/C4D03AQFrIrDEF_Bdyw/profile-displayphoto-shrink_400_400/0/1654104443121?e=1684972800&v=beta&t=q0ilTq77h8z8r3BdBXW6yChAO3qwgYLIYHGlHEbcNOk"
            />
          </Stack>
        </div>
        <br />
        <br />
        <div className={styles?.last}>Made with ❣️ in India</div>
      </div>
    </>
  );
}

export default App;
