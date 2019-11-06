import React from "react";
const styleMovie = {
  border: "1px solid red",
  padding: "10px",
  display: "flex",
  width: "200px",
  color: "white",
  backgroundColor: "orange",
  fontSize: "12px",
  margin: "5px"
};
const Movie = ({ name, price }) => {
  return (
    <div style={styleMovie}>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Movie;
