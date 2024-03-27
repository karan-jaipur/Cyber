import React, { useEffect, useState } from 'react'

const Third = () => {
  
  const [fontSize, setFontSize] = useState(16);

  const incfn = () => {
    setFontSize(Math.min(fontSize + 5,100));
  };

  const decfn = () => {
    setFontSize(Math.max(fontSize - 5,30));
  };

  useEffect(()=>{
    alert("hii")
  },[])
  return (
    <div className='text-center'>
    <h1 style={{ fontSize: `${fontSize}px` }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing 
    </h1>
    <button className='btn btn-outline-primary p-2 m-3' onClick={incfn}>font   +</button>
    <button className='btn btn-outline-danger p-2 m-' onClick={decfn}>font    -</button>
  </div>
);
}

export default Third






// --------------------------background color chg------------------------


// import React, { useState } from 'react'

// const Third = () => {


  
//   const [text, textcol] = useState("black")
//   const [count, setcount] = useState("white")
//   const inc = () => {
//     if (count == "white" &&  text=='black') {
//       setcount('red')
//       textcol('pink')
//     }
//     else {
//       setcount('green')
//     }
//   }



//   return (
//     // <div>
//     <div className='p-5'>
//       <h1 className='text-center ' style={{ background: count, color:text }}>Run</h1>
//       <div className='text-center mt-3'><button className='btn btn-outline-danger ' onClick={() => inc()}>click here </button>
//       </div>
//     </div>
//   )
// }


// export default Third
