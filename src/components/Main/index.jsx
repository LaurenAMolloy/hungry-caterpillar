import React from 'react'
import GameCard  from '../GameCard'

export default function Main({ fruitElements, fruits, generateRandomImages}) {
  //Create the hold button
  //Create the hold mechanism
  //Check if the game is won
  //Release the confetti
  //New Game option

  return (
    <main>
        <GameCard fruits={fruits} generateRandomImages={generateRandomImages} fruitElements={fruitElements} />
    </main>
  )
}
