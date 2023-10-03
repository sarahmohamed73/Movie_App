import React from 'react'
import { moviePage } from '../../APIs/moviesPages'
import { useState, useEffect } from "react";

export default function Pagination() {
  useEffect(() => {
    moviePage(3)
      .then((result) => console.log(result.data))
      .catch((error) => console.log(error));
    }, []);
  return (
    <div>
      <h1>Pagination</h1>
    </div>    
  )
}