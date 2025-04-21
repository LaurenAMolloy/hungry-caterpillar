import React from 'react'
import GameCard  from '../GameCard'

export default function Main( {fruitElements, allNewFruit, setFruit, fruitsArr, gameWon, newGameButton}) {
  return (
    <main>
        <GameCard setFruit={setFruit} fruitElements={fruitElements} allNewFruit={allNewFruit} fruitsArr={fruitsArr} gameWon={gameWon} newGameButton={newGameButton} />
    </main>
  )
}
