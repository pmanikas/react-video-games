import React, { memo } from "react";
import styles from "./Dots.module.scss";

const Dot = ({ active, i, setActiveSlide }) => {
  return <span onClick={() => setActiveSlide(i)} className={`${styles.dot} ${active ? styles.active : ""}`} />;
};

const MemoDot = memo(Dot);

const Dots = ({ slides, activeSlide, setActiveSlide }) => {

  return (
    <div className={styles.dots}>
      {slides.map((slide, i) => (
        <MemoDot key={slide} active={activeSlide === i} i={i} setActiveSlide={setActiveSlide}  />
      ))}
    </div>
  );
};

export default Dots;
