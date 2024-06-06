import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const nav=useNavigate()
  const b=()=>{
    nav('/About')
  }

  return (

    <div>
      <h1> hii this page is Contact</h1>
      <button onClick={()=>{b()}}>about</button>
    </div>
  )
}

export default Contact
