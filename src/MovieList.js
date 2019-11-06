import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
const styleMovieList = {
  display: "flex",
  flexWrap: "wrap"
};
const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <div> Main Container : Items :{movies.length}</div>
      <div style={styleMovieList}>
        {movies.map(movie => (
          <Movie name={movie.name} price={movie.price} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
