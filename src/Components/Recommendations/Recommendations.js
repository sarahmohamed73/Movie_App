import React from 'react'
import { recommends } from './../../APIs/recommends'
import { useState, useEffect } from "react";

export default function Recommendations() {
  useEffect(() => {
    recommends(565770)
      .then((result) => console.log(result.data.results))
      .catch((error) => console.log(error));
    }, []);
  return (
    <div>
      <h1>Recommendations</h1>
    </div>    
  )
}
