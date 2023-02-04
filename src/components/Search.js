import React from "react";

function Search({search, setSearch}) {
  function handleSearch(event) {
    const value = event.target.value
    setSearch(value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange = {handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
