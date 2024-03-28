import { useEffect, useState } from "react";
import styles from "./DaySelector.module.css";

const DaySelector = (props) => {
  const nextDayHandler = () => {
    let num =
      Number(Object.keys(days).find((k) => days[k] === props.currentDay)) + 1;
    if (num === 7) {
      num = 0;
    }
    props.onSetDay(days[num]);
  };

  const previousDayHandler = () => {
    let num =
      Number(Object.keys(days).find((k) => days[k] === props.currentDay)) - 1;
    if (num === -1) {
      num = 6;
    }
    props.onSetDay(days[num]);
  };

  useEffect(() => {
    props.onSetDay(currentDay());
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.dayselector}>
        <div className={styles.selector} onClick={previousDayHandler}>
          «««{" "}
        </div>
        <div className={styles.selectedday}>{props.currentDay}</div>
        <div className={styles.selector} onClick={nextDayHandler}>
          »»»
        </div>
      </div>
    </section>
  );
};

const currentDay = () => {
  let d = new Date();
  let n = d.getDay();
  return days[n];
};

const days = {
  0: "Воскресенье",
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
};

export default DaySelector;
