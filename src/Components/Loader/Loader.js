import React from 'react'

export default function Loader() {
    return (
      <div style={{height: '100vh'}}>
        <div className="spinner-grow text-center" role="status">
          <span className="sr-only">Loading...</span>
        </div> 
      </div>   
    )
}