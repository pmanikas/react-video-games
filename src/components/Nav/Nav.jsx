import React from "react";
import Search from "./../Search/Search";

//Animation
import styles from "./Nav.module.scss";
import { motion } from "framer-motion";
import logo from "./../../img/logo.svg";

//Redux and Routes
import { fetchSearch } from "./../../store/actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../../settings/animations";

const Nav = () => {
  const dispatch = useDispatch();
  const submitSearch = (textInput) => {
    dispatch(fetchSearch(textInput));
  }
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  const MotionNav = motion.nav;
  const MotionLogo = motion.div;

  return (
    <MotionNav
      className={styles.nav}
      variants={fadeIn}
      initial="hidden"
      animate="show"
    >
      <MotionLogo className={styles.logoContainer} onClick={clearSearched}>
        <img className={styles.logo} src={logo} alt="logo" />
        <h1 className={styles.title}>Game Bay</h1>
      </MotionLogo>
      <Search submitSearch={submitSearch} />
    </MotionNav>
  );
};

export default Nav;
