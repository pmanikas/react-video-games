import React from "react";
import styles from "./GamesList.module.scss";
import GameTile from "../GameTile/GameTile";

const GamesList = ({ games, title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.gamesList}>
        {games.map((game) => (
          <GameTile
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </div>
    </div>
  );
};

export default GamesList;
