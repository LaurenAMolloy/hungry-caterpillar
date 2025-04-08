import React from 'react'

export default function Fruit(props) {
    console.log(props)
  return (
   <img className='fruit' src={props.src}></img>
  )
}
