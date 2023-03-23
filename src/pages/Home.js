import { RefreshIcon, SearchIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      navigate(`/browse/${search}`);
    }, 400);
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
            <div className="search">
              <input
                type="text"
                className="search-box"
                placeholder="Search by title (e.g. Dragon Ball)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  onSearchKeyDown(e.key);
                }}
              />
              <button
                className="search__btn"
                onClick={() => handleSubmit()}
                disabled={!search}
              >
                {loading && <RefreshIcon className="loading__btn" />}
                {!loading && <SearchIcon className="search__icon" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
