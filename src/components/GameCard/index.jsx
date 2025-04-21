import React from 'react'

export default function GameCard({fruitElements, setFruit, fruitsArr, gameWon, allNewFruit, newGameButton }) {

  function getNewFruits(){
    if (!gameWon) {
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
    } else {
      setFruit(allNewFruit)
    }
  }

  return (
    <div className="gameCard">
        <h1>Hungry Caterpillar</h1>
        <p>Roll until all fruits are the same. Click each fruit to freeze it at its current value. When you have all ten fruit shout "Hungry!" </p>
        <div className="fruits-container">
          {fruitElements}
        </div>
        <button 
        ref={newGameButton} 
        onClick={() => getNewFruits()} 
        className="newFruitsBtn">{gameWon ? "New Game" : "New Fruits"}
        </button>  
    </div>
  )
}
