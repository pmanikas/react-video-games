import React, { memo } from "react";
import styles from "./Slide.module.scss";
import { useSwipeable } from "react-swipeable";

const Slide = ({ content, width, prevSlide, nextSlide }) => {
  const style = {
    width: `${width}px`,
    backgroundImage: `url("${content}")`,
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    delta: 10,
    trackMouse: false, 
  });

  return (
    <div style={style} className={styles.slide}>
      <img {...handlers}  className={styles.image} src={content} alt={content} />
    </div>
  );
};

export default memo(Slide);
