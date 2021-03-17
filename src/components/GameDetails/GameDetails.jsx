import React from "react";
import GameDetailsPlatforms from "./GameDetailsPlatforms";
import Slider from "./../../components/Slider/Slider";
import LazyImage from "./../LazyImage/LazyImage";

import styles from "./GameDetails.module.scss";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { prepareImage } from "./../../utils/prepareImage.util";
import GameDetailsRating from "./GameDetailsRating";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const GameDetails = ({ pathId }) => {
  const history = useHistory();

  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("close")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const { screen, game, isGameLoading } = useSelector(
    (state) => state.gamesState
  );

  const galleryImages = screen.results.map((obj) => {
    return obj.image;
  });

  return (
    <>
      {!isGameLoading && (
        <div className={`${styles.container} close`} onClick={exitDetailHander}>
          <motion.div
            layoutId={`${pathId}`}
            initial="show"
            className={styles.content}
          >
            <FontAwesomeIcon
              className={`${styles.closeButton} close`}
              onClick={exitDetailHander}
              icon={faTimesCircle}
            />
            <h3>{game.name}</h3>
            <div className={styles.details}>
              <GameDetailsRating gameRating={game.rating} />
              <GameDetailsPlatforms platforms={game.platforms} />
            </div>
            <div className={styles.mainImage}>
              <LazyImage
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
