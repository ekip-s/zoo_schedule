import data from "./info.json";
import styles from "./Content.module.css";
import { Fragment } from "react";

const Content = (props) => {
  const getInfoList = () => {
    return data[props.animalType][props.currentDay];
  };

  if (props.animalType === "") {
    return (
      <section className={styles.notinfo}>
        <div>
          <p>Выбери пользователя</p>
        </div>
      </section>
    );
  } else {
    return (
      <table className={styles.listnode}>
        <tr className={styles.headertable}>
          <td>
            <h2>Время</h2>
          </td>
          <td>
            <h2>Заголововок</h2>
          </td>
          <td>
            <h2>Подробности</h2>
          </td>
        </tr>
        {getInfoList().map((node) => (
          <Fragment>
            <tr>
              <td>{node.time}</td>
              <td>
                <h3>{node.title}</h3>
              </td>
              <td>{node.description}</td>
            </tr>
          </Fragment>
        ))}
      </table>
    );
  }
};

export default Content;
