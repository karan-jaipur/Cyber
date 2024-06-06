import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const nav =useNavigate()
  const c=()=>{
    nav('/')
  }

  return (
    <div>
      <h1>this is about pg</h1>
      <button onClick={()=>{c()}}>Home</button>
    </div>
  )
}

export default About
