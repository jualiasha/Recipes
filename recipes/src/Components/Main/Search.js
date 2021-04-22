import React from "react";

const Search = (props) => {
  return (
    <div>
      <input
        type="text"
        id="search"
        name="search"
        onChange={props.search}
        placeholder="Find the one you need"
      />
      <i className="fas fa-search"></i>
    </div>
  );
};

export default Search;
