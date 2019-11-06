import React, {useContext} from "react"
import {MovieContext} from './MovieContext'

const Nav = () => {
  const [movies,setMovies] = useContext(MovieContext);
  return (
    <div style={{backgroundColor:'grey', padding:'15px'}}>
    {movies.length}
    </div>
  )
}

export default Nav