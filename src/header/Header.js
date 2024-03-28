import SVGIconFox from "../images/fox-svgrepo-com.svg";
import SVGIconHedgehog from "../images/disapointedhedgehog.svg";
import styles from "./Header.module.css";
import { useEffect } from "react";

const Header = (props) => {
  const selectZooHandler = (event) => {
    updateAnimal(event.currentTarget.id);
  };

  useEffect(() => {
    const animal = localStorage.getItem("selectAnimal");
    if (animal != null) {
      updateAnimal(animal);
    }
  });

  const updateAnimal = (animal) => {
    let elemFox = document.getElementById("fox");
    let elemHedgehog = document.getElementById("hedgehog");
    if (animal === "fox") {
      elemFox.classList.remove(styles["not_active"]);
      elemHedgehog.classList.add(styles["not_active"]);
    } else {
      elemHedgehog.classList.remove(styles["not_active"]);
      elemFox.classList.add(styles["not_active"]);
    }
    props.onClick(animal);
  };

  return (
    <header>
      <div className={styles.appheader}>
        <h1>Zoo Schedule</h1>
        <div className={styles.box}>
          <div id="fox" className={styles.boxnode} onClick={selectZooHandler}>
            <h3>fox</h3>
            <img src={SVGIconFox} alt="Fox Select Img" />
          </div>
          <div
            id="hedgehog"
            className={styles.boxnode}
            onClick={selectZooHandler}
          >
            <h3>hedgehog</h3>
            <img src={SVGIconHedgehog} alt="Hedgehog Select Img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
