import React, {useState, createContext} from 'react'
import Data from './data'
import postData from './postData'

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies,setMovies] = useState(postData)
  return(
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}

