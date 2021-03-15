export const lazyLoader = (imageRef, imageSrc, src, setImageSrc) => {
  let observer;
  let didCancel = false;

  if (imageRef && imageSrc !== src) {
    if (IntersectionObserver) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              !didCancel &&
              (entry.intersectionRatio > 0 || entry.isIntersecting)
            ) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        {
          threshold: 0.01,
          rootMargin: "75%",
        }
      );
      observer.observe(imageRef);
    } else {
      // Old browsers fallback
      setImageSrc(src);
    }
  }
  return () => {
    didCancel = true;
    // on component cleanup, we remove the listner
    if (observer && observer.unobserve) {
      observer.unobserve(imageRef);
    }
  }; 
}