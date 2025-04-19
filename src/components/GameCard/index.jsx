import React from 'react'

export default function GameCard({fruitElements, setFruit, fruitsArr, gameWon }) {

  function getNewFruits(){
   //update this function to look through existing dice and not roll if isHeld = true
   //update the img and src
  
    setFruit(oldFruit => {
    return oldFruit.map(fruit => {
      return fruit.isHeld ? fruit :
       {
        //existing properties from fruit are kept
        ...fruit, 
        //random properties from the array are added to src and value from fruitsArr
        ...fruitsArr[Math.floor(Math.random() * fruitsArr.length)]
       } 
    })
  })
  }

  return (
    <div className="gameCard">
        <h1>Hungry Caterpillar</h1>
        <p>Roll until all fruits are the same. Click each fruit to freeze it at its current value. When you have all ten fruit shout "Hungry!" </p>
        <div className="fruits-container">
          {fruitElements}
        </div>
        <button onClick={() => getNewFruits()} className="newFruitsBtn">{gameWon ? "Game Won" : "New Fruits"}</button>  
    </div>
  )
}
