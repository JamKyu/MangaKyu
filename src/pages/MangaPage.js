import { SearchIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Manga from "../components/ui/Manga";
import notFound from "../assets/not_found.svg";

const API_URL = "https://api.jikan.moe/v4/manga?q=";

const Browse = () => {
  const { search } = useParams();
  const [mangaId, setManga] = useState([]);
  const [searchId, setSearchId] = useState(search);
  const [loading, setLoading] = useState();
  const [mangaCount, setMangaCount] = useState(8);

  async function fetchManga(id) {
    setLoading(true);
    const { data } = await axios.get(
      `${API_URL}${
        id || search
      }&type=manga&min_score=1&genres_exclude=9,49,12`
    );
    const result = data.data;
    // console.log(result);
    setManga(result);
    setLoading(false);
  }

  const onSearch = (e) => {
    fetchManga(searchId);
    window.history.replaceState(null, "", `${searchId}`);
  };

  function onSearchKeyUp(key) {
    if (key === "Enter" && searchId) {
      onSearch();
    }
  }

  function filterManga(filter) {
    switch (filter) {
      case "ASC":
        setManga([...mangaId].sort((a, b) => (a.title > b.title ? 1 : -1)));
        break;
      case "DESC":
        setManga([...mangaId].sort((a, b) => (b.title > a.title ? 1 : -1)));
        break;
      case "SCORE":
        setManga([...mangaId].sort((a, b) => b.score - a.score));
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    fetchManga();
  }, []);

  return (
    <>
      <main id="browse">
        <div className="container">
          <div className="row">
            <form className="browse__input" onSubmit={onSearch}>
              <input
                type="text"
                className="browse__input--box"
                placeholder="Search by title"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                onKeyUp={(e) => {
                  onSearchKeyUp(e.key);
                }}
              />
              <SearchIcon
                className="browse__input--icon"
                onClick={() => onSearch()}
              />
            </form>
            <div className="search__filter">
              <h3 className="search__text">
                Search results for: "<span className="peach">{searchId}</span>"
              </h3>
              <select
                defaultValue={"DEFAULT"}
                id="filter"
                onChange={(e) => filterManga(e.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Sort
                </option>
                <option value="ASC">Title, A to Z</option>
                <option value="DESC">Title, Z to A</option>
                <option value="SCORE">Score, High to Low</option>
              </select>
            </div>
            <div className="manga__container">
              {loading ? (
                new Array(mangaCount)
                  .fill(0)
                  .map((_, index) => (
                    <div className="manga skeleton skeleton-box" key={index}></div>
                  ))
              ) : mangaId.length ? (
                mangaId
                  ?.slice(0, mangaCount)
                  .map((manga, index) => (
                    <Manga
                      key={index}
                      image={manga.images.jpg}
                      title={manga.title}
                      id={manga.mal_id}
                      score={manga.score}
                    />
                  ))
              ) : (
                <div className="not__found">
                  <figure className="not__found--wrapper">
                    <img src={notFound} alt="" className="not__found--img" />
                  </figure>
                  <h1 className="not__found--title">No Results</h1>
                  <p>Try searching again</p>
                </div>
              )}
            </div>
            <div className="manga__load">
              {mangaCount < (mangaId.length && 24) ? (
                <button
                  className="manga__btn"
                  onClick={() => setMangaCount(mangaCount + 4)}
                >
                  Load More
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Browse;
