import React from "react";
import styles from "./GameDetailsRating.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const GameDetailsRating = ({ gameRating }) => {
  const getStars = () => {
    const stars = [];
    let star;
    for (let i = 1; i <= 5; i++) {
      if (gameRating >= i) star = faStarFull;
      else if (gameRating < i && gameRating >= i - 0.75) star = faStarHalfAlt;
      else star = faStarEmpty;
      stars.push(
        <FontAwesomeIcon
          icon={star}
          className={styles.star}
          key={`star${i}`}
        ></FontAwesomeIcon>
      );
    }
    return stars;
  };

  return (
    <div className={styles.ratingContainer}>
      <div className={styles.stars}>{getStars()}</div>
      <span>{gameRating}</span>
    </div>
  );
};

export default GameDetailsRating;
