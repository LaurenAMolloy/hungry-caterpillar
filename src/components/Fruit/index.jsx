import React from 'react'

export default function Fruit( { src, value, id, hold, isHeld }) {
  //console.log("id:", id, "isHeld:", isHeld);
  const styles={opacity: isHeld ? "0.2": ""}
  return (
    
      <button 
      style={styles}  
      onClick={() => hold(id)} 
      className="fruitBtn" value={value} id={id} >
      <img  className='fruit-img' src={src}></img>
      </button>
  )
}
