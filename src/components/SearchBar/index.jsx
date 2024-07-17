import React, { useState } from "react";

const SearchBar = (props) => {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="searchBar">
      <form>
        <input type="text" value={title} onChange={handleOnChange} />
        <button>Search</button>
          </form>
    </div>
  );
};

export default SearchBar;
