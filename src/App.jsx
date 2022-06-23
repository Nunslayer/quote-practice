import { useState } from 'react'
import './App.css'
import { DDBB } from './database/database'
import QuoteBox from './components/QuoteBox'


function App() {
  
  const [isRefresh, setIsRefresh] = useState(false)

  const randomNumber = (minimo, maximo) => {
    let auxNumberRandom = Math.random() * ((maximo - minimo)+1)
    auxNumberRandom = Math.floor(auxNumberRandom)
    
    return (minimo + auxNumberRandom)
  }

  const randomColor = () =>{
    const hexaArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    let quoteColor = '#'
    for(let i=0; i<6; i++){
      let auxNumberRandom = randomNumber(0,hexaArray.length -1)
      quoteColor += hexaArray[auxNumberRandom]
    }
    return quoteColor
  }

  const quoteElement = DDBB[randomNumber(0 , 101)]

  const quoteColor = randomColor()

  const quoteSecondColor = randomColor()

  return (
    <div className="App" style={{backgroundColor:`${quoteSecondColor}`}}>
      <QuoteBox quote={quoteElement.quote} 
              author={quoteElement.author} 
              isRefresh={isRefresh} 
              setIsRefresh={setIsRefresh} 
              color={quoteColor} 
              secondColor={quoteSecondColor}
      />
    </div>
  )
}

export default App
