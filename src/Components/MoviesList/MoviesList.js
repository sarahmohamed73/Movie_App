import React from 'react'
import { movieList } from './../../APIs/movies'
import { moviePage } from '../../APIs/moviesPages';
import { search } from '../../APIs/search';
import MovieCard from './MovieCard';
import { useState, useEffect } from "react";

export default function MovieList({searchProp}) {
  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    movieList()
      .then((result) => setMoviesList(result.data.results))
      .catch((error) => console.log(error));

      moviePage()
      .then((result) => console.log(result.data.results))
      .catch((error) => console.log(error));

      search()
      .then((result) => console.log(result.data.results))
      .catch((error) => console.log(error));
    }, []);

  return (
    <div>
      {/* <div className='search-part bg-body-secondary my-5 p-5 rounded rounded-1 ' >
        <h1 className='text-start mb-3'>Welcome To Our Movie App</h1>
        <p className='text-start mb-3'>Millions of movies, TV shows and people to discover. Explore now.</p>
        <form className='input-group'>
          <input type="search" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" class="btn btn-success">search</button>
        </form>
      </div>
       */}
      <div className='movies'>
        <h3 className='text-start mb-4'>Popular Movies</h3>
        <div className="row row-cols-1 row-cols-lg-6 row-cols-md-2 g-4 justify-content-center align-items-center">
          {moviesList.map((movie) => {
            return (
              <div className="col d-flex justify-content-center align-items-center" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </div>    
  )
}