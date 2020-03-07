import React from "react";
import "./search-box.styles.css";
import img from "./assets/food-snack-popcorn-movie-theater-33129.jpg";
import { Link } from "react-router-dom";
const imageUrl = [
  "https://static.pexels.com/photos/1043/red-building-industry-bricks-large.jpg",
  img
];

const SearchBox = ({ handleChange }) => (
  <div className="search-box">
    <div className="image" style={{ backgroundImage: `url(${imageUrl[0]})` }} />
    <h1 className="text">SEARCH FOR YOUR FAVORITE MOVIES</h1>
    <Link to="/movie">click</Link>

    <input
      onChange={handleChange}
      type="search"
      className="search"
      placeholder="search for movies"
    />
  </div>
);
export default SearchBox;
