import React, { useEffect, useState } from 'react'

const Useefftabs = () => {
  const [count,setcount]=useState();
  useEffect(()=>{
    setcount('first')
  },[])

  const a ={
    color:"red",
    fontSize:'20px',
    backgroundColor:'black'
  }
  const b ={
    backgroundColor:"black",
    fontSize:'40px',
    color:'white'
  }
  const c ={
    backgroundColor:"red",
    fontSize:'50px',
    color:'white'
  }

  
  return (
    <div>
    <div className='text-center '>
      <button className='btn '  onClick={()=>{setcount('first')}}style={{fontSize:count==="first"?"50px":'',backgroundColor:count==='first'?"green":'',color:count==='first'?"white":''}}> first</button>
      <button className='btn '  onClick={()=>{setcount('sec')}} style={{backgroundColor:count==="sec"?"greenyellow":''}}>second</button>
      <button className='btn '  onClick={()=>{setcount('three')}} style={{backgroundColor:count==="three"?"blue":'',color:count==='three'?"white":''}}>three</button>
      {
        count=='first'?<div style={a}>first is here</div>:<></>
      }
      {
        count=='sec'?<div   style={b}>Second is here</div>:<></>
      }
      {
        count=='three'?<div style={c}>three is here</div>:<></>
      
      }
      

    </div>
    </div>
  )
}

export default Useefftabs
