import React from 'react'

const Movie = ({ name, price }) => {
return(
  <div>
    <span>
    <h3>{name}</h3>
    <p>{price}</p>
    </span>
  </div>
)
}

export default Movie