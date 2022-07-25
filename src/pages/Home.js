import { RefreshIcon, SearchIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    setLoading(true);
    setTimeout(300);
    navigate(`/browse/${search}`);
  }

  function onSearchKeyDown(key) {
    if (key === "Enter" && search) {
      handleSubmit();
    }
  }

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="header__description">
            <h1 className="header__title">
              Manga<span className="peach">Kyu</span>
            </h1>
            <h2 className="header__sub-title">
              Browse the <span className="peach">manga</span> database:
            </h2>
            <form className="search" onSubmit={handleSubmit}>
              <input
                type="text"
                className="search-box"
                placeholder="Search by title"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  onSearchKeyDown(e.key);
                }}
              />
              <button className="search__btn" type="submit" disabled={!search}>
                {loading && <RefreshIcon className="loading__btn" />}
                {!loading && <SearchIcon className="search__icon" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
