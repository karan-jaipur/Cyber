import React from 'react'
import First from './component/First'
import img from './Assets/pexels-photo-7455371.jpeg'
// ------------first method ---
function pass() {
  return (
    <div class="card" style={{width:'30vw'}}>
      <img style={{height:'40vh'}} src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

const Prop = () => {
  // --------------------------second mthod-----------
  // const pass = <div class="card" style={{width:'30vw'}}>
  //   <img style={{height:'40vh'}} src={img} class="card-img-top" alt="..." />
  //   <div class="card-body">
  //     <h5 class="card-title">Card title</h5>
  //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //     <a href="#" class="btn btn-primary">Go somewhere</a>
  //   </div>
  // </div>
  return (
    <div>
      <h1>hii</h1>
      <First keys={pass()} />
    </div>
  )
}

export default Prop
