import './App.css'
import { Main } from './components'
import { useState} from 'react'
import { nanoid } from 'nanoid'
import { Fruit } from './components'
import apple from './assets/apple.png'
import oranges from './assets/oranges.png'
import pear from './assets/pear.png'
import plums from './assets/plums.png'
import strawberries from './assets/strawberries.png'

export default function App() {
  //Array of images
  const fruitsArr = [
    { src: apple, value: "apple" },
    { src: oranges, value: "orange" },
    { src: pear, value: "pear" },
    { src: strawberries, value: "strawberry" },
    { src: plums, value: "plum" },
  ]
  
  const [fruit, setFruit] = useState(()=>generateRandomImages())
  

  //Create the array of 10 random images
  function generateRandomImages(){
    //Array to hold random images
    let randomImages = [];
   
    //loop 10 time to create random fruits
    for(let i=0; i<10; i++) {
       //Get a random index
       const randomIndex = Math.floor(Math.random() * fruitsArr.length)
       const fruitsData = fruitsArr[randomIndex]
       //{ src: apple value: "apple"}

       //Make A fruit object based on the random index
        const fruitObj = {
        src: fruitsData.src,
        value: fruitsData.value,
        id: nanoid(),
        isHeld: false, 
    }
    randomImages.push(fruitObj)
  }
  return randomImages
  }

  const fruitElements= fruit.map((fruitObj) => {
    return (<Fruit 
    src={fruitObj.src}
    value={fruitObj.value}
    id={fruitObj.id}
    isHeld={fruitObj.isHeld}
    key={fruitObj.id}
     />
    )
  })

  
  return (
    <>
      <Main fruitElements={fruitElements}   />
    </>
  )
}


