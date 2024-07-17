import React from "react";
import Tracklist from "../Tracklist/Tracklist";


const SearchResult = (props) => {
    return (
        <div className="searchResults">
            <h2>Results</h2>
            <Tracklist/>
        </div>
    )
}

export default SearchResult;