import React from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import MovieList from "./components/movie-list/movie-list.component";
import { config } from "./config";
import Details from "./pages/details/details.component";
import { Route, Switch } from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchField: ""
    };
  }

  componentDidMount() {
    this.fetchData(false);
  }
  fetchData = value => {
    let API_URL = `${config.BASE_URL}3/movie/popular?api_key=${config.API_KEY}&language=en-US&page=1`;
    if (value) {
      API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&query=${this.state.searchField}`;
    }

    fetch(API_URL)
      .then(results => results.json())
      .then(data => {
        const { results } = data;
        if (results === undefined) {
          return this.fetchData(false);
        }
        this.setState({ movies: results }, () => console.log(results));
      });
  };
  handleChange = event => {
    const { value } = event.target;
    this.setState({ searchField: value }, () => this.fetchData(true));
  };

  render() {
    return (
      <div className="App">
        <SearchBox handleChange={this.handleChange} />
        <h2>POPULAR MOVIES</h2>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
