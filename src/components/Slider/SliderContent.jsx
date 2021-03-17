import React from "react";

const SliderContent = (props) => {
  const style = {
    display: `flex`,
    height: `100%`,
    width: `${props.width}px`,
    transform: `translateX(-${props.translate}px)`,
    transition: `transform ease-out ${props.transition}s`,
  };

  return (
    <div className="sliderContent" style={style}>
      {props.children}
    </div>
  );
};

export default SliderContent;
