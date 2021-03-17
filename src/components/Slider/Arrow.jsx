import React, { memo } from "react";
import styles from "./Arrow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";

const Arrow = ({ direction, handleClick }) => {
  const style = {
    right: direction === "right" ? `1rem` : `unset`,
    left: direction === "left" ? `1rem` : `unset`,
  };

  return (
    <div onClick={handleClick} className={styles.arrow} style={style}>
      {direction === "right" ? (
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
        />
      ) : (
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
        />
      )}
    </div>
  );
};

export default memo(Arrow);
