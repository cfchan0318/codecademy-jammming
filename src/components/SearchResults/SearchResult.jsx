import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./SearchResult.module.css";

const mockResult = [
  {
    id: 1,
    name: "Whatever",
    artist: "Ado",
    album: "test1",
  },
  {
    id: 2,
    name: "Whatever",
    artist: "Ado",
    album: "test2",
  },
  {
    id: 3,
    name: "Whatever",
    artist: "Ado",
    album: "test3",
  },
  {
    id: 4,
    name: "Whatever",
    artist: "Ado",
    album: "test4",
  },
  {
    id: 5,
    name: "Whatever",
    artist: "Ado",
    album: "test5",
  },
];

const SearchResult = (props) => {
  return (
    <div className={styles.searchResult}>
      <h2 className={styles.title}>Results</h2>
      <Tracklist tracks={mockResult}/>
    </div>
  );
};

export default SearchResult;
