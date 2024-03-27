import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='d-flex'>
    <NavLink to='/'><li>Home</li></NavLink>
    <NavLink to='/Karan'><li>About</li></NavLink>
    <NavLink to='/sec'><li>Contact</li></NavLink>
    </div>
  )
}

export default Header