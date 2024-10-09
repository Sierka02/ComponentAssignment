import { useState } from 'react'
import './App.css'



function App() {

  return(
    <>
    <HeaderComp/>
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
  const [counter, setCounter] = useState(1)

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    if (counter !== 1) {
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
        <option value="op3"> product 3</option>
        <option value="op4"> product 4</option>
      </select>
      </div>
     
    <div className='Counterbtn'>
      <p>quantity:</p>
    <button onClick={decrementCounter}>-</button>
    <p>{counter}</p>
    <button onClick={incrementCounter}>+</button>
    </div>

    <OrderInfo counterValue = {counter}/>
    

    </div>

  )
}

function OrderInfo(props) {


  return(

    <div>
    <h3>Order info</h3>
    <div className='grid-container'>
      <div className='grid-item'>Product</div>
      <div className='grid-item'>Quantity</div>
      <div className='grid-item'>Total</div>
      <div className='grid-item'>hello</div>
      <div className='grid-item'>{props.counterValue}</div>
      <div className='grid-item'>hello</div>

    </div>


    </div>
   

  )
}






export default App

