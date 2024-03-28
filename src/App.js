import { useState } from "react";
import styles from "./App.module.css";
import Header from "./header/Header";
import Content from "./content/Content";
import ImgContent from "./img_content/ImgContent";
import DaySelector from "./DaySelector/DaySelector";

function App() {
  const [selectAnimal, setSelectAnimal] = useState("");
  const [day, setDay] = useState("");

  const selectAnimalHandler = (select) => {
    localStorage.setItem("selectAnimal", select);
    setSelectAnimal(() => {
      return select;
    });
  };

  const setDayHandler = (newDay) => {
    setDay(() => {
      return newDay;
    });
  };

  return (
    <section className={styles}>
      <Header onClick={selectAnimalHandler} />
      <DaySelector currentDay={day} onSetDay={setDayHandler} />
      <Content animalType={selectAnimal} currentDay={day} />
      <ImgContent animalType={selectAnimal} />
    </section>
  );
}

export default App;
