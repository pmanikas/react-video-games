import React from "react";
import Slider from "./../../components/Slider/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

import styles from "./GameDetails.module.scss";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { prepareImage } from "./../../utils/prepareImage.util";

import playstation from "./../../img/playstation.svg";
import steam from "./../../img/steam.svg";
import xbox from "./../../img/xbox.svg";
import nintendo from "./../../img/nintendo.svg";
import apple from "./../../img/apple.svg";
import gamepad from "./../../img/gamepad.svg";

const GameDetails = ({ pathId }) => {
  const history = useHistory();

  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesomeIcon
            icon={faStarFull}
            className={styles.star}
            key={i}
          ></FontAwesomeIcon>
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            icon={faStarEmpty}
            className={styles.star}
            key={i}
          ></FontAwesomeIcon>
        );
      }
    }
    return stars;
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const { screen, game, isGameLoading } = useSelector(
    (state) => state.gamesState
  );

  // const galleryImages = screen.results.map((obj) => {
  //   return prepareImage(obj.image, 1280);
  // });

  const galleryImages = screen.results.map((obj) => {
    return obj.image;
  })

  return (
    <>
      {!isGameLoading && (
        <div
          className={`${styles.container} shadow`}
          onClick={exitDetailHander}
        >
          <motion.div
            layoutId={`${pathId}`}
            initial="show"
            className={styles.details}
          >
            <div className={styles.ratingContainer}>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <div className={styles.info}>
                <h3>Available on</h3>
                <div className={styles.platforms}>
                  {game.platforms.map((data) => (
                    <img
                      className={styles.platformImage}
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    ></img>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.media}>
              <img
                className={styles.mainImage}
                src={
                  game &&
                  game.background_image &&
                  prepareImage(game.background_image, 1280)
                }
                alt={game.background_image}
              />
            </div>
            <div className={styles.description}>
              <p>{game.description_raw}</p>
            </div>
            <div className={styles.sliderContainer}>
              <Slider slides={galleryImages} />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default GameDetails;
