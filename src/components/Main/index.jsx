import React from 'react'
import GameCard  from '../GameCard'

export default function Main( {fruitElements, allNewFruit, setFruit, fruitsArr, gameWon}) {
  return (
    <main>
        <GameCard setFruit={setFruit} fruitElements={fruitElements} allNewFruit={allNewFruit} fruitsArr={fruitsArr} gameWon={gameWon} />
    </main>
  )
}
