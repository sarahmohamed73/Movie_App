import React from 'react'
import { search } from '../../APIs/search'
import { useState, useEffect } from "react";

export default function SearchMovies() {
  useEffect(() => {
    search()
      .then((result) => console.log(result.data))
      .catch((error) => console.log(error));
    }, []);
  return (
    <div>
      <h1>Search</h1>
    </div>    
  )
}
