import "./App.css";
import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// 279aa1d1

const API_URL = "http://www.omdbapi.com?apikey=279aa1d1";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSeachTerm] = useState();

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1> Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSeachTerm(e.target.value);
          }}
        ></input>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        ></img>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div>
          <p>No movies found</p>
        </div>
      )}
    </div>
  );
}

export default App;
