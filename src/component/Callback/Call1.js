import React, { useCallback, useState } from 'react'
import Call2 from './Call2'

const Call1 = () => {
  const [data,setdata]=useState(0)
  const [count,setcount]=useState(0)

  const back=useCallback(()=>{
{/* <h1>call1 is here</h1> */}
  },[data])
  return (
    <div>
      <Call2 back={back} data={data}  />
      <div>
      <h1>{data}</h1>
      <button onClick={()=>{setdata(data+1)}} >First butt</button>
      </div>
      <div>
      <h1>{count}</h1>
      <button onClick={()=>{setcount(count+1)}} >sec butt</button>
      </div>
    </div>
  )
}

export default Call1
