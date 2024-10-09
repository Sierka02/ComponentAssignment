import { useState } from 'react'
import './App.css'



function App() {

  return(
    <>
    <HeaderComp />
    <ProductForm/>
    </>
  )
}




function HeaderComp() {

  return(
    <div className='content'>
     
      <h1>Welcome to the product page</h1>
    </div>
  )
}




function ProductForm() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1)
    }
  }
  return(

    <div>

      <h3>select product</h3>

      <p>product:</p> 
      <select name="" id="">
        <option value="op1"> product 1</option>
        <option value="op2"> product 2</option>
        <option value="op3">product 3</option>
        <option value="op4"> product 4</option>
      </select>
     
    <div>
      <p>quantity:</p>
    <button className='incrementbtn' onClick={incrementCounter}>+</button>
    <p className='quantitynbr'>{counter}</p>
    <button className='decrementbtn' onClick={decrementCounter}>-</button>
    </div>
    

    </div>

  )
}






export default App

