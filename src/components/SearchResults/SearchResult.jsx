import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from './SearchResult.module.css'


const SearchResult = (props) => {
    return (
        <div className={styles.searchResult}>
            <h2 className={styles.title}>Results</h2>
            <Tracklist/>
        </div>
    )
}

export default SearchResult;