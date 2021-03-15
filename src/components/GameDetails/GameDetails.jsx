import React from "react";

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
import starEmpty from "./../../img/star-empty.png";
import starFull from "./../../img/star-full.png";

const GameDetails = ({ pathId }) => {
  const history = useHistory();

  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push(process.env.PUBLIC_URL);
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" className={styles.star} key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" className={styles.star} key={i} src={starEmpty}></img>);
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

  const { screen, game, isGameLoading } = useSelector((state) => state.gamesState);

  return (
    <>
      {!isGameLoading && (
        <div
          className={`${styles.container} shadow`}
          onClick={exitDetailHander}
        >
          <motion.div layoutId={`${pathId}`} initial="show" className={styles.details}>
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
                src={game && game.background_image && prepareImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </div>
            <div className={styles.description}>
              <p>{game.description_raw}</p>
            </div>
            <div>
              {screen.results.map((screen) => (
                <img
                  className={styles.galleryImage}
                  src={screen && screen.image && prepareImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default GameDetails;
