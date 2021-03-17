import React, { useState } from "react";
import styles from "./Search.module.scss";

const Search = ({ submitSearch }) => {
  const [textInput, setTextInput] = useState("");
  const [isFocused, setIsFocused] = useState("");

  const changeInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearchHandler = (e) => {
    e.preventDefault();
    if (textInput) {
      submitSearch(textInput);
      setTextInput("");
    }
  };

  const setFocusedHandler = (state) => {
    setIsFocused(state);
  };

  return (
    <form className={`${styles.searchForm} ${isFocused ? styles.focus : ""}`}>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          value={textInput}
          onChange={changeInputHandler}
          type="text"
          autoFocus
          onFocus={() => setFocusedHandler(true)}
          onBlur={() => setFocusedHandler(false)}
          placeholder="Search for Game Titles..."
        />
        <button
          className={styles.searchButton}
          onClick={submitSearchHandler}
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
