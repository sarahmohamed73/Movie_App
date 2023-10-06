import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons"
import { useSelector } from "react-redux";

export default function NavBar() {
  const counter = useSelector((state) => state.watchlist.counter) 
  return (
    <nav className="navbar navbar-expand-lg px-5 text-light" style={{backgroundColor: 'var(--mainColor)'}}>
      <div className="container-fluid">
        <NavLink className='navigations navbar-brand text-light ' style={({isActive}) => {return {fontWeight: isActive ? "bold" : ""};}} to='/'>Movie App</NavLink>
        <div className="ms-auto px-5 d-flex align-items-center ">
          <div className="dropdown text-light">
            <button className="btn dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              EN
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" style={{color: 'var(--mainColor)'}} href="#">EN</a></li>
              <li><a className="dropdown-item" style={{color: 'var(--mainColor)'}} href="#">AR</a></li>
            </ul>
          </div>
          <NavLink className="wishList px-3 text-light text-decoration-none " style={({isActive}) => {return {fontWeight: isActive ? "bold" : ""};}} to="/Watchlist" >
            {
            counter == 0 ?
              <FontAwesomeIcon icon={farHeart} className="fs-5" />  
            :
              <FontAwesomeIcon icon={fasHeart} className="fs-5" /> 
            }
            <sup className="ms-1">({counter})</sup>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
