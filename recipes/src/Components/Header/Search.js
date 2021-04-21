import React from "react";

const Search = (props) => {
  return (
    <div>
      <input
        type="text"
        id="search"
        name="search"
        onChange={props.search}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
