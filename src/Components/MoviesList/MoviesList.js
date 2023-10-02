import React from 'react'
import { movieList } from './../../APIs/movies'
import { moviePage } from '../../APIs/moviesPages';
import MovieCard from './MovieCard';
import { useState, useEffect } from "react";

export default function MovieList() {
  useEffect(() => {
    movieList()
      .then((result) => console.log(result.data.results))
      .catch((error) => console.log(error));

      moviePage()
      .then((result) => console.log(result.data.results))
      .catch((error) => console.log(error));
    }, []);

  return (
    <div>
      <h1>Movies List</h1>
      <MovieCard />
    </div>    
  )
}