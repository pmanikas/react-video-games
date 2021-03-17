import React from "react";
import LazyImage from "./../LazyImage/LazyImage";
import styles from "./Footer.module.scss";
import footerImage from "./../../img/video-game-journey-aesthetics-footer.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <LazyImage src={footerImage} alt={'Journey Video Game Aesthetics'} />
      <div className={styles.textOverlay}>
        <div>Game Bay - a React.js Demo crafted by <a href="https://pantelismanikas.eu" target="window">Pantelis Manikas</a></div>
        <a href="https://github.com/pmanikas/react-video-games">Github Code</a>
      </div>
    </div>
  )
}

export default Footer;