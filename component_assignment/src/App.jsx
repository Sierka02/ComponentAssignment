import { useState } from 'react'
import './App.css'



function App() {

  return(
    <>
    <HeaderComp />
    <ProductForm/>
    <OrderInfo/>
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

    <div className='dropdown'>
      <p>product:</p> 
      <select name="" id="">
        <option value="op1"> product 1</option>
        <option value="op2"> product 2</option>
        <option value="op3">product 3</option>
        <option value="op4"> product 4</option>
      </select>
      </div>
     
    <div className='Counterbtn'>
      <p>quantity:</p>
    <button className='decrementbtn' onClick={decrementCounter}>-</button>
    <p className='quantitynbr'>{counter}</p>
    <button className='incrementbtn' onClick={incrementCounter}>+</button>
    </div>
    

    </div>

  )
}

function OrderInfo() {

  return(

    <div>
    <h3>Order info</h3>
    <div className='grid-container'>
      <div className='grid-item'>product</div>
      <div className='grid-item'>Quantity</div>
      <div className='grid-item'>Total</div>
      <div className='grid-item'>Hello</div>
      <div className='grid-item'>Hello</div>
      <div className='grid-item'>Hello</div>

    </div>


    </div>
   

  )
}






export default App

