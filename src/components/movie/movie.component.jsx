import React from "react";
import "./movie.style.css";
import { config } from "../../config";
import { Link } from "react-router-dom";

const Movie = ({ title, poster_path }) => (
  <Link to="/details">
    <div className="card-container">
      <img
        alt="monster"
        src={`${config.BASE_IMAGE_URL}${config.IMAGE_SIZE}${poster_path}`}
      />
      <p>{title}</p>
    </div>
  </Link>
);
export default Movie;
