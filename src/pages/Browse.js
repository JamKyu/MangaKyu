import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import SearchBar from "../components/ui/SearchBar";

function Browse() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setManga] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchManga(mangaId) {
    setLoading(true);
    const response = await axios.get(``);
    console.log(response);
    setManga(response);
    setLoading(false);
  }

  useEffect(() => {
    fetchManga();
  }, []);

  return (
    <>
      <Nav />
      <main id="browse">
        <div className="container">
          <div className="row">
            <SearchBar />
            <div className="search__filter">
              <h3 className="search__text">Search results for: {}</h3>
              <select id="filter" onChange="">
                <option value disabled selected>
                  Sort
                </option>
                <option value="ASC">Title, A to Z</option>
                <option value="DESC">Title, Z to A</option>
                <option value="POP">Popularity</option>
              </select>
            </div>
            <div className="manga__container">
              {loading
                ? new Array(8).fill(0).map((_, index) => (
                    <div className="manga__skeleton" key={index}>
                      <div className="manga__skeleton--img"></div>
                      <div className="manga__skeleton--title"></div>
                      <div className="manga__skeleton--title"></div>
                    </div>
                  ))
                : data.map((manga) => {
                    <div
                      className="manga"
                      key={manga.id}
                      onClick={() => navigate(`${manga.id}`)}
                    >
                      <div className="manga__img--wrapper">
                        <img className="manga__img" src="" alt="" />
                      </div>
                      <h3 className="manga__title"></h3>
                      <h3 className="manga__title"></h3>
                    </div>;
                  })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Browse;
