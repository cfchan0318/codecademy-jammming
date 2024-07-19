import React, { useState } from "react";
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <form>
        <div>
          <input className={styles.searchInput} type="text" value={title} onChange={handleOnChange} />
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
          <button className={styles.searchButton}>Search</button>
        </div>
        
      </form>
    </div>
  );
};

export default SearchBar;
