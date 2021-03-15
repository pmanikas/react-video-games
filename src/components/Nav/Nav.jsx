import React, { useState } from "react";

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
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
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
      <form className={styles.searchForm}>
        <input className={styles.searchInput} value={textInput} onChange={inputHandler} type="text" />
        <button className={styles.searchButton} onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </MotionNav>
  );
};

export default Nav;
