import React from "react";
import styles from "./CSS/App.module.css";
import CodeIcon from "@mui/icons-material/Code";
import LayersIcon from "@mui/icons-material/Layers";
import WidgetsIcon from "@mui/icons-material/Widgets";

import { HashLink } from "react-router-hash-link";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function App() {
  return (
    <>
      <div className={styles.feedback}>
        <div className={styles.feedback_left}>
          {" "}
          Want to help us getting a testcase?
        </div>
        <div className={styles.feedback_right}>Please Visit Here &rarr;</div>
      </div>
      <div className={styles.canvas}>
        <div className={styles.canvas_left}>
          <img src={process.env.REACT_APP_LOGO} alt="logo" />
        </div>
        <div className={styles.canvas_right}>
          <div className={styles.canvas_right_top}>
            <div className={styles.canvas_right_top_heading}>
              “ A Picture is worth a Thousand Words! ”
            </div>
            <div className={styles.canvas_right_top_subheading1}>
              <span className={styles.highlights}>ImageMe</span> is an{" "}
              <span className={styles.highlights}>
                Image Generation & Identification System.
              </span>
              <br />
              It is designed as a one-stop destination to harness
              <br />
              different tasks using Images and Photographs. <br />
              Built around the concepts of Machine Learning & Deep Learning,
              <br />
              ImageMe Provides a solution to Various Clients and Use Cases.
            </div>
          </div>
          <div className={styles.canvas_right_bottom}>
            <div>
              {" "}
              <button className={styles.button_85}>
                <HashLink
                  smooth
                  to="#features"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Features &nbsp;
                  <WidgetsIcon />
                </HashLink>
              </button>
            </div>
            <div>
              {" "}
              <button className={styles.button_85}>
                <HashLink
                  smooth
                  to="#tech_stack"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Technology Stack &nbsp; <LayersIcon />
                </HashLink>
              </button>
            </div>
            <div>
              {" "}
              <button className={styles.button_85}>
                <HashLink
                  smooth
                  to="#code"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Code &nbsp;
                  <CodeIcon />
                </HashLink>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="tech_stack">
        <h1>Tech STack</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum
        pulvinar urna scelerisque commodo. Proin sit amet ex a nisi consequat
        imperdiet nec id nunc. Aenean varius mauris ac lorem lobortis, ut
        sagittis dolor pulvinar. Fusce lectus purus, luctus vel augue et,
        lacinia finibus libero. Integer at lacinia nulla. Pellentesque non velit
        ornare, euismod nibh ac, mollis felis. Praesent quis odio at diam
        dignissim consequat faucibus sed velit. Vestibulum nec tortor non justo
        rhoncus hendrerit. Ut facilisis justo ut tempus ullamcorper. Nullam
        consequat nisl eu condimentum semper. Cras fermentum arcu elit, nec
        porta nunc sodales sit amet. Praesent vel eros dolor. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Aliquam blandit
        malesuada aliquam. Ut a felis justo. Suspendisse at erat tortor. Donec
        iaculis elit orci, ut luctus mi volutpat et. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus tempus, metus et molestie
        vestibulum, quam erat bibendum eros, id maximus metus mauris vitae
        lacus. Mauris eget ultrices metus. Cras suscipit arcu iaculis, placerat
        lacus eget, bibendum eros. Mauris vulputate turpis eu porttitor mattis.
        Integer fringilla ultricies erat, a pharetra erat lobortis in. Mauris id
        ex a magna pulvinar hendrerit. Suspendisse mollis turpis ut bibendum
        aliquet. Sed pulvinar posuere pretium. Aliquam maximus eget ligula sed
        semper. Aenean sodales sem in urna imperdiet, sit amet lobortis dolor
        euismod. Proin imperdiet urna hendrerit enim tempus, nec auctor nisl
        euismod. Sed luctus fringilla sem in euismod. Maecenas bibendum
        dignissim tempus. Integer mattis ligula nec elementum aliquam. Etiam
        egestas dolor molestie vehicula efficitur. Maecenas viverra, dui id
        congue pharetra, est felis fringilla nisl, eu suscipit elit neque at
        ante. Ut accumsan cursus est sed volutpat. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Fusce
        aliquam erat faucibus sagittis aliquet. Donec quis odio maximus, euismod
        risus non, pharetra ipsum. In elementum metus sed dignissim convallis.
        Aliquam congue neque sit amet sapien finibus, sit amet pellentesque
        nulla vulputate. Proin ullamcorper nisl nulla, eu viverra sem
        ullamcorper eu. Aenean scelerisque lorem at nibh rhoncus, at rutrum orci
        semper. Vestibulum aliquet nunc vel purus interdum, ac tristique mi
        commodo. Ut at dui sodales, consequat tortor consequat, posuere nibh.
        Aliquam mollis dolor ut ex ullamcorper, vitae semper mi tincidunt. Morbi
        vehicula, ex molestie varius dignissim, eros metus efficitur dolor, a
        viverra urna magna at erat. Maecenas eu leo efficitur, tempus diam
        vitae, iaculis sem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Proin tristique sagittis orci quis
        faucibus. Suspendisse ornare venenatis vulputate. Curabitur posuere
        dolor mi, at laoreet lorem blandit id. Nunc fermentum nisl quis nisi
        hendrerit, in rutrum purus egestas. Aliquam venenatis dignissim eros a
        faucibus. Etiam id imperdiet ex, ac pellentesque nibh. Curabitur maximus
        vitae turpis et consequat. In mauris purus, iaculis sed massa at,
        ultrices pulvinar sem. Ut ornare arcu metus, at accumsan quam ultrices
        at. Etiam varius pretium mollis. Cras eu lectus nibh. Praesent
        condimentum, mi ac euismod venenatis, tortor tortor consectetur risus,
        quis viverra purus purus bibendum elit.
      </div>
      <div id="features">
        <h1>features</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum
        pulvinar urna scelerisque commodo. Proin sit amet ex a nisi consequat
        imperdiet nec id nunc. Aenean varius mauris ac lorem lobortis, ut
        sagittis dolor pulvinar. Fusce lectus purus, luctus vel augue et,
        lacinia finibus libero. Integer at lacinia nulla. Pellentesque non velit
        ornare, euismod nibh ac, mollis felis. Praesent quis odio at diam
        dignissim consequat faucibus sed velit. Vestibulum nec tortor non justo
        rhoncus hendrerit. Ut facilisis justo ut tempus ullamcorper. Nullam
        consequat nisl eu condimentum semper. Cras fermentum arcu elit, nec
        porta nunc sodales sit amet. Praesent vel eros dolor. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Aliquam blandit
        malesuada aliquam. Ut a felis justo. Suspendisse at erat tortor. Donec
        iaculis elit orci, ut luctus mi volutpat et. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus tempus, metus et molestie
        vestibulum, quam erat bibendum eros, id maximus metus mauris vitae
        lacus. Mauris eget ultrices metus. Cras suscipit arcu iaculis, placerat
        lacus eget, bibendum eros. Mauris vulputate turpis eu porttitor mattis.
        Integer fringilla ultricies erat, a pharetra erat lobortis in. Mauris id
        ex a magna pulvinar hendrerit. Suspendisse mollis turpis ut bibendum
        aliquet. Sed pulvinar posuere pretium. Aliquam maximus eget ligula sed
        semper. Aenean sodales sem in urna imperdiet, sit amet lobortis dolor
        euismod. Proin imperdiet urna hendrerit enim tempus, nec auctor nisl
        euismod. Sed luctus fringilla sem in euismod. Maecenas bibendum
        dignissim tempus. Integer mattis ligula nec elementum aliquam. Etiam
        egestas dolor molestie vehicula efficitur. Maecenas viverra, dui id
        congue pharetra, est felis fringilla nisl, eu suscipit elit neque at
        ante. Ut accumsan cursus est sed volutpat. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Fusce
        aliquam erat faucibus sagittis aliquet. Donec quis odio maximus, euismod
        risus non, pharetra ipsum. In elementum metus sed dignissim convallis.
        Aliquam congue neque sit amet sapien finibus, sit amet pellentesque
        nulla vulputate. Proin ullamcorper nisl nulla, eu viverra sem
        ullamcorper eu. Aenean scelerisque lorem at nibh rhoncus, at rutrum orci
        semper. Vestibulum aliquet nunc vel purus interdum, ac tristique mi
        commodo. Ut at dui sodales, consequat tortor consequat, posuere nibh.
        Aliquam mollis dolor ut ex ullamcorper, vitae semper mi tincidunt. Morbi
        vehicula, ex molestie varius dignissim, eros metus efficitur dolor, a
        viverra urna magna at erat. Maecenas eu leo efficitur, tempus diam
        vitae, iaculis sem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Proin tristique sagittis orci quis
        faucibus. Suspendisse ornare venenatis vulputate. Curabitur posuere
        dolor mi, at laoreet lorem blandit id. Nunc fermentum nisl quis nisi
        hendrerit, in rutrum purus egestas. Aliquam venenatis dignissim eros a
        faucibus. Etiam id imperdiet ex, ac pellentesque nibh. Curabitur maximus
        vitae turpis et consequat. In mauris purus, iaculis sed massa at,
        ultrices pulvinar sem. Ut ornare arcu metus, at accumsan quam ultrices
        at. Etiam varius pretium mollis. Cras eu lectus nibh. Praesent
        condimentum, mi ac euismod venenatis, tortor tortor consectetur risus,
        quis viverra purus purus bibendum elit.
        <div id="code">
          <h1>code</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum
          pulvinar urna scelerisque commodo. Proin sit amet ex a nisi consequat
          imperdiet nec id nunc. Aenean varius mauris ac lorem lobortis, ut
          sagittis dolor pulvinar. Fusce lectus purus, luctus vel augue et,
          lacinia finibus libero. Integer at lacinia nulla. Pellentesque non
          velit ornare, euismod nibh ac, mollis felis. Praesent quis odio at
          diam dignissim consequat faucibus
        </div>
      </div>
      <div className={styles.fab}>
        <Fab color="primary" aria-label="add" href="/#">
          <ArrowUpwardIcon />
        </Fab>
      </div>
    </>
  );
}

export default App;
