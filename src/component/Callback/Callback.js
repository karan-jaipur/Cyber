import React, { useCallback, useState } from 'react'
import ChildCallback from './ChildCallback'

const Callback = () => {

  const [data,setdata]=useState(0)
  const [count,setcount]=useState(0)

  const demo = useCallback(()=>{

  },[count])

  return (
    <div>
      <ChildCallback demo={demo} count={count} />
      <h1>{data}</h1>
      <button onClick={()=>{setdata(data+1)}} >click </button>
      <h1>{count}</h1>
      <button onClick={()=>{setcount(count+1)}} >click </button>
    </div>
  )
}

export default Callback
