import React from "react";
import styles from "./GameTile.module.scss";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "./../../store/actions/gamesAction";
import { Link } from "react-router-dom";
import { prepareImage } from "./../../utils/prepareImage.util";
import { popup } from "./../../settings/animations";

const GameTile = ({ name, released, image, id }) => {
  const stringPathId = id.toString();

  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <motion.div
      className={styles.gameTile}
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          className={styles.image}
          layoutId={`image ${stringPathId}`}
          src={prepareImage(image, 640)}
          alt={name} />
      </Link>
    </motion.div>
  );
};
export default GameTile;
