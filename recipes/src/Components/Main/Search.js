import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  return (
    <div className="searchinput">
      <input
        type="text"
        id="search"
        name="search"
        onChange={props.search}
        placeholder="Find the one you need"
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default Search;
