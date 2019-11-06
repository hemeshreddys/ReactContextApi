import React, { useState } from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovie from "./AddMovie";
import "./App.css";
import { MovieProvider } from "./MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <h1>Movie List</h1>
      <p>using react context api state management</p>
      <div className="App">
        <AddMovie />
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
};
export default App;
