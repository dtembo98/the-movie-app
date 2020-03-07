import React from "react";
import "./movie-list.style.css";
import Movie from "../movie/movie.component";

const MovieList = props => {
  return (
    <div className="card-list">
      {props.movies.map(({ id, ...otherProps }) => (
        <Movie key={id} {...otherProps} />
      ))}
    </div>
  );
};
export default MovieList;
