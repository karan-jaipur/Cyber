import React, { createContext } from 'react'
import First from './First'

const mycontext = createContext()
const mycontext2 = createContext()

const Usecontext = () => {
  const name = "karan"
  const lastname = "kmt"
  return (
    <div>
      <mycontext.Provider  value={name}>
      <mycontext2.Provider  value={lastname}>

      <h1>parent file</h1>
      <First/>
      </mycontext2.Provider>
      </mycontext.Provider>
    </div>
  )
}

export default Usecontext
export {mycontext,mycontext2}
