import React, { useState,useRef } from 'react'  

const Ref = () => {
  const [data ,setData]=useState('a')
  const useref=useRef();
  // console.log(useref,'hello');
  const Refresh =()=>{
    useref.current.value=" "
    useref.current.focus()
    useref.current.style.backgroundColor='green'

  }

  const Update=()=>{
    useref.current.value ="karan"
    useref.current.style.color = "red"
    useref.current.style.backgroundColor = "black"
    useref.current.style.border = "10px"
  }

  return (
    <div>
      <h1>useRef</h1>

      <input type='text' ref={useref} value={data} onChange={(e)=>{setData(e.target.value)}} />
      <button onClick={()=>{Refresh()}} >Click</button>
      <button onClick={()=>{Update()}} >Update</button>

    </div>
  )
}

export default Ref
