import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./SearchResult.module.css";


const SearchResult = ({tracks,handleBtnOnClick}) => {
  return (
    <div className={styles.searchResult}>
      <h2 className={styles.title}>Results</h2>
      <Tracklist tracks={tracks} btnContent='+' handleBtnOnClick={(i)=>handleBtnOnClick(i)}/>
    </div>
  );
};

export default SearchResult;
