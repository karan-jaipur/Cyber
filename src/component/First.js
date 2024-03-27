import React from 'react'
import Second from './Second'

const First = (props) => {
  return (
    <div>
      <h1>{props.keys}</h1>
      <Second newone={props.keys} />
    </div>
  )
}

export default First





// import React from 'react'
// import Second from './Second'
// // import pexels from '../Assets/pexels-photo-7455371.jpeg'
// import Props from './Props'
// // const First = (Name) => {
// //   return (
// //     <div>first: {Name}
// //       <Second a={Name} />
// //     </div>
// //   )
// // }
// const First = ({ card }) => { 
//   return (
//     <div>
//       <Second keys={card} />
//       <Props></Props>
//       {/* <img src={pexels}  /> */}
//     </div>
//   )
// }

// export default First
