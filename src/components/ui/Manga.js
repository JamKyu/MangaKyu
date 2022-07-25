import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

const Manga = ({ image, title, score, id }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/manga/${id}`);
  };
  return (
    <div className="manga">
      <div className="manga--wrapper" onClick={handleClick}>
        <figure className="manga__img--wrapper">
          <img src={image.image_url} alt="" className="manga__img" />
        </figure>
        <div className="manga__titles">
          <p className="manga__title">{title}</p>
          <p className="manga__score">
            <StarIcon className="manga__score--icon" />
            {score ? score : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Manga;
