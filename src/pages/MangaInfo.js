import {
  ChevronLeftIcon,
  ExternalLinkIcon,
  StarIcon,
} from "@heroicons/react/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MangaInfo() {
  const { id } = useParams();
  const [manga, setManga] = useState({
    mal_id: "",
    title: "",
    score: "",
    synopsis: "",
    url: "",
    images: { jpg: { image_url: "" } },
    published: { string: "" },
  });
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  async function fetchManga() {
    setLoading(true);
    const { data } = await axios.get(`https://api.jikan.moe/v4/manga/${id}`);
    const response = data.data;
    // console.log(response);
    setManga(response);
    setLoading(false);
  }

  useEffect(() => {
    fetchManga();
  }, []);

  return (
    <div className="manga__info">
      <div
        className="manga__info--return"
        onClick={() => navigate(`/browse/${manga.title}`)}
      >
        <ChevronLeftIcon className="manga__info--return--icon" />
        <div className="manga__info--return--text">Return</div>
      </div>
      {loading ? (
        <div className="manga__info--wrapper">
          <div className="manga__info--img--skeleton"></div>
          <div className="manga__desc">
            <div className="manga__desc--skeleton"></div>
            <div className="manga__desc--skeleton"></div>
            <div className="manga__desc--skeleton"></div>
            <div className="manga__desc--para--skeleton"></div>
          </div>
        </div>
      ) : (
        <div className="manga__info--wrapper">
          <a
            href={manga.url}
            target="_blank"
            rel="noreferrer"
            className="manga__info--img--wrapper"
          >
            <img
              src={manga.images.jpg.image_url}
              alt=""
              className="manga__info--img"
            />
            <div className="manga__info--img--bg">
              <div className="manga__info--img--link">
                <ExternalLinkIcon />
              </div>
            </div>
          </a>
          <div className="manga__desc">
            <h1 className="manga__desc--title">{manga.title}</h1>
            <h2 className="manga__desc--score">
              <StarIcon className="manga__score--icon" />
              {manga.score ? manga.score : "N/A"}
            </h2>
            <h3>Published:</h3>
            <p className="manga__desc--published">{manga.published.string}</p>
            <h3>Synopsis:</h3>
            <p className="manga__desc--synopsis">
              {manga.synopsis ? manga.synopsis : "No synopsis available... :("}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MangaInfo;
