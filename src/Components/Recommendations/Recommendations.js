import React from 'react'
import { recommends } from './../../APIs/recommends'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from '../MoviesList/MovieCard';


export default function Recommendations() {
  
  useEffect(() => {
    recommends(775552)
      .then((result) => console.log(result.data.results))
      .catch((error) => console.log(error));
    }, []);

  return (
    <div>
      
    </div>    
  )
}