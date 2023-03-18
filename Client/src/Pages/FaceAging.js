import React from "react";
import WarningModal from "../Components/WarningModal.js";
import styles from "../CSS/FaceAging.module.css";
import Feedback from "../Components/Feedback.js";

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
        lorem ipsum dolor sit amet, consectetur adipiscing Duis ipsum lacus,
        maximus in commodo sed, laoreet in est. Duis mauris augue, ullamcorper
        id odio a, consequat sagittis dui. Sed sed sollicitudin neque. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Proin eget sagittis tortor. Aenean hendrerit finibus
        elementum. Sed in mi dictum, rhoncus elit ut, condimentum sem. Morbi
        consequat lacus risus, non gravida eros iaculis in. Morbi quis ante sit
        amet nulla euismod aliquet sit amet id purus. Nulla sem massa,
        pellentesque id porttitor ut, tempor in neque. Cras ullamcorper cursus
        purus vitae tristique. Nam rhoncus semper augue, eget sodales ligula
        sodales non. Morbi pulvinar ipsum ac neque luctus, eu consectetur sapien
        iaculis. Quisque finibus commodo risus, non pulvinar leo sodales a.
        Vestibulum vel nisl vel dui dictum pharetra quis id dolor. Suspendisse
        sollicitudin risus ut nunc sagittis molestie. Curabitur eget imperdiet
        sem. Pellentesque tincidunt ipsum eu eros cursus congue. Integer sed
        lobortis lectus. Etiam lacinia, tellus nec scelerisque fermentum, orci
        arcu iaculis leo, consectetur euismod tellus enim vitae tortor. Morbi id
        feugiat nibh, id lobortis ipsum. Cras ut fringilla urna. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Curabitur luctus erat sagittis vestibulum consectetur. Nulla et ante ut
        leo eleifend volutpat. Suspendisse libero lacus, cursus vel ullamcorper
        eget, iaculis ac tellus. Curabitur mollis, metus nec suscipit convallis,
        purus erat consectetur felis, eget dignissim urna felis a arcu. Mauris
        condimentum eget metus a mollis. Aliquam felis turpis, tempus quis ex
        eu, consequat vestibulum dui. Donec quis tempor eros. Donec sollicitudin
        ipsum sit amet accumsan aliquam. Mauris commodo quam vel dui eleifend
        cursus. Nullam mollis, dui et eleifend auctor, risus arcu pulvinar
        velit, id volutpat massa urna eget diam. Proin suscipit orci ligula.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Duis at odio tincidunt arcu elementum faucibus. Duis
        dui neque, suscipit ac tortor eget, facilisis consectetur diam. Praesent
        molestie tortor urna, vitae condimentum metus posuere id. Aliquam sit
        amet sapien iaculis, iaculis ipsum eget, laoreet diam. Nunc pharetra
        bibendum blandit. Proin nec orci eget purus laoreet pellentesque sed
        eget nunc. Nulla tincidunt luctus mi et mollis. Nam bibendum pulvinar
        sapien, vel facilisis neque feugiat at. Sed vel ante lacus. Fusce ac
        risus felis. Nam lobortis augue eros, nec tristique enim dictum vel.
        Nunc nec tellus vel nibh ultricies iaculis ac vel justo. Nulla facilisi.
      </div>
      <div className={styles.finalStart}>
        <button onClick={handleStep1}>Start Now</button>
      </div>
    </>
  );
};

export default FaceAging;
