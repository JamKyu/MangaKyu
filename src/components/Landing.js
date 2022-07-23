import React from "react";
import SearchBar from "./ui/SearchBar";

function Landing() {
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
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Landing;
