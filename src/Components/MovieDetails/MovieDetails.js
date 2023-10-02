import React from 'react'
import { movieDetails } from './../../APIs/details'
import { useState, useEffect } from "react";

export default function MovieDetails() {
  useEffect(() => {
    movieDetails(565770)
      .then((result) => console.log(result.data))
      .catch((error) => console.log(error));
    }, []);
  return (
    <div>
      <h1>Movies Details</h1>
    </div>    
  )
}
