import React from 'react'


const Card = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <h3>{props.city}</h3>
    </div>
  )
}

export default Card
