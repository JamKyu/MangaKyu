import { RefreshIcon, SearchIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    setTimeout(() => {
      navigate(`${search}`);
    }, 300);
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-box"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearch();
            }
          }}
        />
        <button
          className="search__btn click"
          onClick={() => setSearch()}
          disabled={!search}
        >
          {loading && <RefreshIcon className="loading__btn" />}
          {!loading && <SearchIcon className="search__icon" />}
        </button>
      </form>
    </>
  );
}

export default SearchBar;
