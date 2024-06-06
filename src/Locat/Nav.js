import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'


const Nav = () => {
  const locate=useLocation()
  // const color = locate.pathname==='/Locate' ? 'text-danger' : ' ';
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
     <NavLink to="/">   <li class="nav-item">
          <a className={locate.pathname==='/' ? 'text-danger':' ' }>Home</a>
         </li></NavLink>
     <NavLink to="/About">   <li class="nav-item">
          <a className={locate.pathname==='/About' ? 'bg-success text-danger':' '}>About</a>
          {/* <a className={locate.pathname==='/' ? 'bg-success text-danger' : locate.pathname==='/about' ? 'bg-info text-warning' : ''}>About</a> */}

        </li></NavLink>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
