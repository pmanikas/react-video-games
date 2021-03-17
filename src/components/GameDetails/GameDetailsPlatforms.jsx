import React from "react";
import styles from "./GameDetailsPlatforms.module.scss";

import playstation from "./../../img/playstation.svg";
import steam from "./../../img/steam.svg";
import xbox from "./../../img/xbox.svg";
import nintendo from "./../../img/nintendo.svg";
import apple from "./../../img/apple.svg";
import gamepad from "./../../img/gamepad.svg";

const GameDetailsPlatforms = ({ platforms }) => {
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

  return (
    <div className={styles.info}>
      <div className={styles.platforms}>
        {platforms.map((data) => (
          <img
            className={styles.platformImage}
            alt={data.platform.name}
            key={data.platform.id}
            src={getPlatform(data.platform.name)}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default GameDetailsPlatforms;
