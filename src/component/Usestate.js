import React, {useState} from 'react'

const Karan    = () => {
  // const[count,setcount]= useState(0)
  // const inc=()=>{
  //   setcount(count+1)
  // }
  

  const name = ["a","b","c","d","e"]
  const[count,setcount]=  useState(0)
  const inc=()=>{
    if(count<name.length-1){
    setcount(count+1)
  }}
  
  // const dec =()=>{
  //   if (count>1000){
  //     setcount(count-1)
  //   }
  // }
  return (
    <div className=' bg-dark text-danger' style={{height:'100vh'}}>
    <div className='p-5'>
      <h1 className='text-center text-primary'>Run:{name[count]}</h1>
      <div className='text-center mt-3'><button className='btn btn-outline-danger ' onClick={()=>inc()}>click here +</button>
    </div>
    </div>
    {/* <div className='bg-dark text-white'> 
      <button className='btn btn-outline-primary' onClick={()=>{dec()}}>click here -</button>
    </div> */}
    </div>
  )
}

export default Karan
