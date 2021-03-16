import React, { useState, useEffect, useRef } from "react";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";
import Dots from "./Dots";
import styles from "./Slider.module.scss";

const Slider = (props) => {
  const { slides } = props;

  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: null,
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { activeSlide, translate, transition, _slides } = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  const getWidth = () =>  sliderRef.current && sliderRef.current.getBoundingClientRect().width;

  useEffect(() => {
    const slider = sliderRef.current;

    const play = () => {
      autoPlayRef.current();
    };

    const smooth = (e) => {
      if (e.target.className.includes("SliderContent")) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = slider.addEventListener("transitionend", smooth);
    const onResize = window.addEventListener("resize", resize);

    let interval = null;

    if (props.autoPlay) {
      interval = setInterval(play, props.autoPlay * 1000);
    }

    setState({ ...state, translate: getWidth(), transition: 0 });

    return () => {
      slider.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("resize", onResize);

      if (props.autoPlay) {
        clearInterval(interval);
      }
    };
  }, []);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition]);

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  const smoothTransition = () => {
    let _slides = [];

    if (activeSlide === slides.length - 1) {
      // We're at the last slide.
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    } else if (activeSlide === 0) {
      // We're back at the first slide. Just reset to how it was on initial render
      _slides = [lastSlide, firstSlide, secondSlide];
    } else {
      // Create an array of the previous last slide, and the next two slides that follow it.
      _slides = slides.slice(activeSlide - 1, activeSlide + 2);
    }

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth(),
    });
  };

  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });
  };

  const setActiveSlide = (newSlide) => {
    setState({
      ...state,
      translate: newSlide <= activeSlide ? 0 : translate + getWidth(),
      activeSlide: newSlide,
    });
  };

  const prevSlide = () => {
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });
  };

  return (
    <div className={styles.slider} ref={sliderRef}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide width={getWidth()} key={_slide + i} content={_slide} />
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />

      <Dots slides={slides} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
    </div>
  );
};

export default Slider;
