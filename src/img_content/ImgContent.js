import SVGIconHedgehog from "../images/hedgehog-svgrepo-com.svg";
import SVGIconFox from "../images/fox-shape-svgrepo-com.svg";
import styles from "./ImgContent.module.css";

const ImgContent = (props) => {
  const returnImg = () => {
    if (props.animalType == "fox") {
      return <img src={SVGIconFox} alt="Fox Img" />;
    } else if (props.animalType == "hedgehog") {
      return <img src={SVGIconHedgehog} alt="Hedgehog Img" />;
    } else {
      return "";
    }
  };

  return <footer className={styles.imgfooter}>{returnImg()}</footer>;
};

export default ImgContent;
