import React from 'react'
import StarRating from './Rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as NotLike } from "@fortawesome/free-regular-svg-icons"
import { faHeart as Like } from "@fortawesome/free-solid-svg-icons"

export default function MovieCard({ movie, navigateDetail }) {
    return (
      <div class="card border-0 " onClick={() => navigateDetail(movie.id)}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} class="card-img-top rounded-1 " alt="..." />
        <div class="card-body">
          <h5 class="card-title text-start">{movie.original_title.substr(0,15)}</h5>
          <p class="card-text">
            <StarRating rating={movie.vote_average / 2} />
          </p>
          <p class="card-text d-flex justify-content-between ">
            <small class="text-body-secondary">{movie.release_date}</small>
            <span className="text-end px-3 text-success">
              <FontAwesomeIcon icon={NotLike} className='fs-5' />
            </span>
          </p>
        </div>  
      </div>
    )
}
