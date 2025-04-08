import React from 'react'
import { useState } from 'react'

export default function GameCard({fruits, generateRandomImages, fruitElements}) {
  return (
    <div className="gameCard">
        <h1>Hungrize Caterpillar</h1>
        <p>Rules: Roll until all fruits are the same. Click each fruit to freeze it at its current value between rolls. </p>
        {fruitElements}
    </div>
  )
}
