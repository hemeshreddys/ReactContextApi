import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
const StyleAddMovie = {
  padding: "50px"
};
const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = e => {
    setName(e.target.value);
  };
  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);
  };

  return (
    <div style={StyleAddMovie}>
      Add Movie name :
      <form onSubmit={addMovie}>
        <input type="text" name="name" value={name} onChange={updateName} />
        <input type="text" name="name" value={price} onChange={updatePrice} />
        <button>submit</button>
      </form>
    </div>
  );
};
export default AddMovie;
