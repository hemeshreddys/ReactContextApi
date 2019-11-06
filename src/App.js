import React,{useState} from "react"
import MovieList from "./MovieList"
import Nav from "./Nav"
import AddMovie from './AddMovie'
import './App.css';
import {MovieProvider} from './MovieContext'

const App = () => {
  return(
    <MovieProvider>
      <div className="App">
        <AddMovie/>
        <Nav/>
        <MovieList/>
      </div>
    </MovieProvider>
  )
}
export default App