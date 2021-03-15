import React from "react";
import styles from "./Spinner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from "@fortawesome/free-solid-svg-icons";

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <FontAwesomeIcon icon={faFan} size="8x" className={styles.spinner} />
    </div>
  );
};

export default Spinner;
