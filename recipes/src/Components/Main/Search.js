import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const Search = (props) => {
  return (
    <div className="searchinput">
      <input
        type="search"
        id="search"
        name="search"
        onChange={props.search}
        placeholder="Find the one you need"
      />
      <SearchIcon style={{ fontSize: 38 }} />
    </div>
  );
};

export default Search;
