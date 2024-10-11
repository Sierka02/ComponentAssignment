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
  const products = [
    {name: 'Bike', price: '450'},
    {name: 'Ice skates', price: '220'},
    {name: 'Boat', price: '1000'},
    {name: 'Ski', price: '550'},
    {name: 'Skateboard', price: '150'},
  ]

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
      <select>
    {
      products.map (p => 
       <option key={p.name}>{p.name} {p.price}€</option>
      )
    }

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

