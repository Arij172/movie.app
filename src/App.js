import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import "./App.css";
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Oppenheimer",
      description: "Oppenheimer is a 2023 biographical thriller film written and directed by Christopher Nolan. Based on the 2005 biography American Prometheus by Kai Bird and Martin J. Sherwin",
      posterURL: "https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900",
      rating: 8.8,
    },
    {
      title: "Barbie",
      description: "Barbie is a 2023 American fantasy comedy film directed by Greta Gerwig and written by Gerwig and Noah Baumbach.[6] Based on the Barbie fashion dolls by Mattel, it is the first live-action Barbie film after numerous computer-animated direct-to-video and streaming television films",
      posterURL: "https://sportshub.cbsistatic.com/i/2023/04/04/6984d3ac-cad7-4d96-ad30-cd192fa6195a/barbie-character-poster.jpg",
      rating: 7.5,
    },
    
  ]);

  const [filteredMovies, setFilteredMovies] = useState([...movies]);
  const handleFilterChange = (filterType, value) => {
    const newFilteredMovies = movies.filter((movie) => {
      if (filterType === "title") {
        return movie.title.toLowerCase().includes(value.toLowerCase());
      } else if (filterType === "rating") {
        return movie.rating >= parseFloat(value);
      } else {
        return true;
      }
    });

    setFilteredMovies(newFilteredMovies);
  };

  const addNewMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title: e.target.title.value,
      description: e.target.description.value,
      posterURL: e.target.posterURL.value,
      rating: parseFloat(e.target.rating.value),
    };
    addNewMovie(newMovie);
    e.target.reset();
  };

  return (
    <div>
      <h1>Movie List</h1>
      <Filter handleFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <h2>Add a New Movie</h2>
      <form className="movie-form"  onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Title:</label>
          <input type="text" name="title" required />
        </div>
        <div className="input-group">
          <label>Description:</label>
          <input type="text" name="description" required />
        </div>
        <div className="input-group">
          <label>Poster URL:</label>
          <input type="url" name="posterURL" required />
        </div>
        <div className="input-group">
          <label>Rating:</label>
          <input type="number" step="0.1" name="rating" required />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default App;
