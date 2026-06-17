import React from 'react'

const Card = (props) => {
  return (
    <div style={{border: '5px solid red', width: '200px'}}>
        <h3>Student Record</h3>
        <img src={props.img}/>
        <h3>Student Name:{props.name}
        </h3>
        <h3>Student class:{props.class}</h3>
       
    </div>
  )
}

export default Card
