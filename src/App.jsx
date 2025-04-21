import './App.css'
import { Main } from './components'
import { useState, useRef, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { Fruit } from './components'
import apple from './assets/apple.png'
import orange from './assets/orange.png'
import pear from './assets/pear.png'
import plum from './assets/plum.png'
import strawberry from './assets/strawberry.png'
import Confetti from 'react-confetti'

export default function App() {
  //Array of images
  const fruitsArr = [
    { src: apple, value: "apple" },
    { src: orange, value: "orange" },
    { src: pear, value: "pear" },
    { src: strawberry, value: "strawberry" },
    { src: plum, value: "plum" },
  ]

  //Call new fruit as soon as page loads
  const [fruit, setFruit] = useState(() => allNewFruit())
  //Create a ref
  const newGameButton = useRef(null)
  //Object with a current property
  console.log(newGameButton)

  const gameWon = fruit.every(fruitBtn => fruitBtn.value === fruit[0].value) &&
  fruit.every(fruitBtn => fruitBtn.isHeld)

  useEffect(function() {
    if(gameWon) {
      newGameButton.current.focus()
    }
  }, [gameWon]) 
    
  function allNewFruit() {
    //randomFruit array
    let newFruitArr =[]
    //loop 10 times to create 10 dice
    for(let i=0; i<10; i++) {
      const randNum = Math.floor(Math.random() * fruitsArr.length)
      const randImg = fruitsArr[randNum]
      //push object with
      newFruitArr.push({
        //existing array plus
        ...randImg,
        id:nanoid(),
        isHeld: false})
    }
    console.log(newFruitArr)
    return newFruitArr
  }

  function hold(id) {
    //console.log(id)
    // Always guaranteed to be the latest fruit state
    setFruit(oldFruit => {
      return oldFruit.map(fruit => {
        return fruit.id === id 
        ? {...fruit, isHeld: !fruit.isHeld} : fruit
      })
    })
  }

  //Map over the array of objects to render the component
  const fruitElements =fruit.map((fruit) => {
    return <Fruit
     src={fruit.src}
     value={fruit.value}
     id={fruit.id}
     key={fruit.id}
     isHeld={fruit.isHeld}
     hold={hold}
     />

  })
  return (
    <>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && <p>Congratulations! You Won! Press "New Game" to start again</p>}
      </div>
      <Main setFruit={setFruit} fruitElements={fruitElements} allNewFruit={allNewFruit} fruitsArr={fruitsArr} gameWon={gameWon} newGameButton={newGameButton} />
    </>
  )
}


