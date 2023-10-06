import React from 'react'
import { movieDetails } from './../../APIs/details'
import { useState, useEffect } from "react";

export default function MovieDetails() {
 
  useEffect(() => {
    movieDetails()
      .then((result) => console.log(result.data))
      .catch((error) => console.log(error));
    }, []);

  return (
    <></>
  )
}