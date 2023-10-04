import React from 'react'
import './Search.css'
import { search } from '../../APIs/search'
import { useState, useEffect } from "react";
import { TextField, Button, Tabs, Tab } from '@mui/material';
// import SearchIcon from '@material-ui/icons/Search'; 
import { Search } from '@mui/icons-material';
import axios from 'axios';
import MovieCard from '../MoviesList/MovieCard';
import Pagination from  '../MoviesList/Pagination'


// import MovieList from '../MoviesList/MoviesList';

export default function SearchMovies() {

// movie or series ?
const [type, setType] = useState(0); 

// for Tabs between Pages (search for movie / search for series)
const [ page, setPage ] = useState(1); 

// for search
const [searchText, setSearchText ] = useState("");

// for content 
const [content, setContent] = useState();

// for number of pages
const [ numOfPages, setNumOfPages ] = useState();



// calling API through SearchText
const fetchSearch = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=1e8cfdde8d627e45358cc8ee3259c637&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
    // console.log(data);
  } catch (error) {
    console.error(error);
  }
};

useEffect( () => {
  window.scroll(0,0);
  fetchSearch();
}, [ type, page ] ) 


  // useEffect(() => {
  //   search()
  //     .then((result) => console.log(result.data))
  //     .catch((error) => console.log(error));
  //   }, []);



  return (

    <>  
    
    <div>
      <h1>Search</h1>
      {/* <MovieList searchProp={searchProp}/> */}
{/* ------------------------------------------------------------------------ */}
{/* div for both search bar and search button */}
      <div style={{display:"flex", margin: '15px 0'}} >

         <TextField style={{flex: 1}}
      className='searchBox'
      label='Search'
      variant='filled'
      onChange={ (e) => setSearchText(e.target.value) } />

    <Button variant='contained' 
    className='searchButton'
    onClick={fetchSearch}
    style={{backgroundColor: "#198754", 
      position: "absolute",
      top: "7.5rem",
      padding: "1rem 2rem",
      left: "106rem" }}
      >
        <Search style={{width: '1rem'}}/>
    </Button>

      </div>
     {/* ------------------------------------------------- */}

     {/* tabs */}
      

    <Tabs value={type} onChange={ (event, newValue) => {
                      setType(newValue);
                      setPage(1); }}   
                      indicatorColor='primary' 
                      textColor='primary'
                      style={{paddingBottom: 5 , marginLeft: "30rem"
                      }}
          > 

        <Tab style={{width:'50%'}} label='Search For Movies'/>
        <Tab style={{width:'50%'}} label='Search For Series'/>

    </Tabs>
    {/* ---------------------------------------------- */}

    {/* PIgnation and MOvie card content */}

    <div className="trending">

        {content &&
      content.map((c) => (
        <MovieCard
          key={c.id}
          movie={{
            poster_path: c.poster_path,
            original_title: c.original_title || c.name,
            date: c.first_air_date || c.release_date,
            media_type: type ? "tv" : "movie",
          }}
        />
      ))}

        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <Pagination setPage={setPage} numOfPages={numOfPages} />
      )}




    </div>  
    </>
    
  )
}
