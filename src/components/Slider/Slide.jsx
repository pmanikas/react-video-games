import React, { memo } from "react";
import styles from "./Slide.module.scss";

const Slide = ({ content, width }) => {
  const style = {
    width: `${width}px`,
    backgroundImage: `url("${content}")`,
  };
  
  return <div style={style} className={styles.slide} />;
};

export default memo(Slide);
