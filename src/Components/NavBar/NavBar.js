import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons"

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success px-5">
      <div className="container-fluid">
        <NavLink className='navigations navbar-brand' style={({isActive}) => {return {fontWeight: isActive ? "bold" : ""};}} to='/'>Movie App</NavLink>
        <div className="ms-auto px-5 d-flex align-items-center ">
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              EN
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">EN</a></li>
              <li><a class="dropdown-item" href="#">AR</a></li>
            </ul>
          </div>
          <NavLink className="wishList px-3 text-dark" to="/WishList" >
            <FontAwesomeIcon icon={faHeart} className="fs-5" />
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
