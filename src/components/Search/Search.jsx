import React, { useState } from "react";
import styles from "./Search.module.scss";

const Search = ({ submitSearch }) => {
  const [textInput, setTextInput] = useState("");

  const changeInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearchHandler = (e) => {
    e.preventDefault();
    submitSearch(textInput);
    setTextInput("");
  };

  return (
    <form className={styles.searchForm}>
      <input
        className={styles.searchInput}
        value={textInput}
        onChange={changeInputHandler}
        type="text"
      />
      <button
        className={styles.searchButton}
        onClick={submitSearchHandler}
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
