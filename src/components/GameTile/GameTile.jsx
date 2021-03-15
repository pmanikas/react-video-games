import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Spinner from "./../Spinner/Spinner";
import styles from "./GameTile.module.scss";
import { motion } from "framer-motion";
import { loadDetail } from "./../../store/actions/gamesAction";
import { prepareImage } from "./../../utils/prepareImage.util";
import { popup } from "./../../settings/animations";

const GameTile = ({ name, released, image, id }) => {
  const stringPathId = id.toString();

  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  const { isGameLoading } = useSelector(
    (state) => state.gamesState
  );

  const { pathname } = useLocation();
  const pathId = Number(pathname.split("/")[2]);

  return (
    <motion.div
      className={styles.gameTile}
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      { isGameLoading && pathId === id && <Spinner /> }
      <Link to={{ pathname: `game/${id}` }}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          className={styles.image}
          layoutId={`image ${stringPathId}`}
          src={!!image && prepareImage(image, 640)}
          alt={name} />
      </Link>
    </motion.div>
  );
};
export default GameTile;
