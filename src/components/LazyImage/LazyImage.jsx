import React, { useState, useEffect } from "react";
import { lazyLoader } from "./../../utils/lazyLoader.utils";
import styles from "./LazyImage.module.scss";

const placeHolder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

const LazyImage = ({ src, alt, disableAnimation }) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState();
  const [hasError, setHasError] = useState(false);

  const onLoad = (e) => {
    !disableAnimation && e.target.classList.add(styles.loaded);
  };

  const onError = (e) => {
    e.target.classList.add(styles.hasError);
    setHasError(true);
  };

  useEffect(() => {
    lazyLoader(imageRef, imageSrc, src, setImageSrc);
  }, [src, imageSrc, imageRef]);

  return (
    <img
      className={styles.image}
      style={hasError ? { transform: `content: url(${placeHolder})` } : {}}
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

export default LazyImage;
