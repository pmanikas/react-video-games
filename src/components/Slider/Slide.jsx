import React, { memo } from "react";
// import LazyImage from "./../LazyImage/LazyImage";
import styles from "./Slide.module.scss";

const Slide = ({ content, width }) => {
  const style = {
    width: `${width}px`,
    backgroundImage: `url("${content}")`,
  };

  return (
    <div style={style} className={styles.slide}>
      <img className={styles.image} src={content} alt={content} />
    </div>
  );
};

export default memo(Slide);
