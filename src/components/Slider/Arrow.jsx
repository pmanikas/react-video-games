import React, { memo } from "react";
import styles from "./Arrow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";

const Arrow = ({ direction, handleClick }) => {
  const style = {
    right: direction === "right" ? `25px` : `unset`,
    left: direction === "left" ? `25px` : `unset`,
  };

  return (
    <div onClick={handleClick} className={styles.arrow} style={style}>
      {direction === "right" ? (
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          size="2x"
        />
      ) : (
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          size="2x"
        />
      )}
    </div>
  );
};

export default memo(Arrow);
