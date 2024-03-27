import React from 'react'
import First from './First'
import pexels from '../Assets/pexels-photo-7455371.jpeg'

const Props = () => {
  const sty = {
    color: "white",
    backgroundColor: "pink",
    
  }
  const card=<div class="card" style={sty}>
  <img style={{width:"10vw",height:'20vh'}} src={pexels} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
  return (
    <div>
    
      <h1>hello</h1>
      <First news={card}  />

    </div>
  )
}

export default Props
