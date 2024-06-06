import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Nav = () => {
  const a=useLocation()
  return (
    <div>
       <div className='navbg'>
      <div className=' p-3'>
     <div className='container d-flex justify-content-between '>
      <div>
      <img className='rounded-5' style={{width:'80px'}} src='https://images.pexels.com/photos/7176246/pexels-photo-7176246.jpeg?auto=compress&cs=tinysrgb&w=600' />
      </div>
      <div>
        <NavLink className={a.pathname==='/' ? 'text-success':''} style={{textDecoration:'none'}} to="/"><h3>Home</h3></NavLink>
      </div>
      <div>
        <NavLink className={a.pathname==='/Coffee'?'text-success':''} style={{textDecoration:'none'}} to="/Coffee"><h3>Coffee</h3></NavLink>
      </div>
     </div>
     </div>
    </div>
    </div>
  )
}

export default Nav
