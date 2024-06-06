import React, { useContext } from 'react'
import {mycontext,mycontext2} from './Usecontext'

const Thirdas = () => {
  const uc = useContext(mycontext)
  const uc2 = useContext(mycontext2)
  return (
    <div>
      <h1>this is third as file</h1>
      <h2>{uc}</h2>
      <h2>{uc2}</h2>
    </div>
  )
}

export default Thirdas
