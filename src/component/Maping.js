import React from 'react'

const Maping = () => {

    const  Data = [
        {
        fist:'Karan',
        sec:'Karan',
        third:'Karan',
    },
        {
        fist:'Karan',
        sec:'Karan',
        third:'Karan',
    },
        {
        fist:'Karan',
        sec:'Karan',
        third:'Karan',
    },
        {
        fist:'Karan',
        sec:'Karan',
        third:'Karan',
    },
]
  return (
    <div>
      

      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {         
        Data.map((tb,index)=>{
            return(
                <tr>
                <th scope="row">{index+1}</th>
                <td>{tb.fist}</td>
                <td>{tb.sec}</td>
                <td>{tb.third}</td>
              </tr>
            )
        })
    }
  
     
  </tbody>
</table>
    </div>
  )
}

export default Maping
