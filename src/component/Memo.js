import React, { useMemo, useState } from 'react'

const Memo = () => {
  const[plus,orplus]=useState(0)
  const inc=()=>{
    console.log('raj dal');
    orplus(plus+1)
  };
  const dec=()=>{
    if(plus>0){
      console.log("decres")
      orplus(plus-1)
      
    }
  };
  const a = useMemo(()=>{
    return plus *10
  },[plus])
  return (
    <div>
      <p >{a}</p>
      <h1>value:{plus}</h1>
      <button className='btn btn-outline-primary m-5' onClick={inc} >inc</button>
      <button className='btn btn-outline-danger' onClick={dec} >dec</button>
    </div>
  )
}
          
export default Memo
