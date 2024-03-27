import React from 'react'
import Header from './Header'
// mapping----------------------------------------------------------------
const Hello = () => {
  const Component=[
    {
    a:'1',
    b:'Pankaj',
    c:'@pankaj'
  },
    {
    a:'2',
    b:'Harshit',
    c:'@harshit'
  },
  ]
  return (
    <div>
      <Header/>
      {
        Component.map((a)=>{
          return(
            <div className='Table'>
              <thead>
              <tr>
                <th>S.No</th>
                <th>Names</th>
                <th>Account</th>
              </tr>
              </thead>
              <tbody>
                <td>{a.a}</td>
                <td>{a.b}</td>
                <td>{a.c}</td>
              </tbody>
            </div>
          )
        })
      }
    </div>
  )
}

export default Hello