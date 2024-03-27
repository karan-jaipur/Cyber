import React, { useEffect, useState } from 'react'

const Useeffect = () => {

  const [a, b] = useState(0)
  const fun = () => {
    setTimeout(() => {
      b(a + 1)
    }, 1000);
  }
useEffect(()=>{

  fun()
})
  useEffect(() => {
    alert("hii")
  },[])
  return (
    <div>
      <h1>Count: {a}</h1>
    </div>
  )
}

export default Useeffect
