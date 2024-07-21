import React, { useState } from "react";
import styles from './SearchBar.module.css';

const SearchBar = ({handleOnClick}) => {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
        <div>
          <input className={styles.searchInput} type="text" value={title} onChange={handleOnChange} />
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
          <button onClick={() =>handleOnClick(title)} className={styles.searchButton}>Search</button>
        </div>
    </div>
  );
};

export default SearchBar;
