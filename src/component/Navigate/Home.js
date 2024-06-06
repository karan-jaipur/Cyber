import React from 'react'
import { useNavigate } from 'react-router-dom'
 
const Home = () => {
  const nav=useNavigate()
  const a =()=>{
    nav('/Contact')
  }
  return (
    <div>
      <h1>home</h1>
      <button onClick={()=>{a()}}>Click</button>
    </div>
  )
}

export default Home 
