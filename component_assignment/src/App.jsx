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
  const [select, setSelect] = useState('bike')
  const products = [
    {name: 'Bike', price: '450'},
    {name: 'Ice skates', price: '220'},
    {name: 'Boat', price: '1000'},
    {name: 'Ski', price: '550'},
    {name: 'Skateboard', price: '150'},
  ]

  const selectedProduct = products.find(p => p.name === select)     // this function iterates through the array and finds the p.name value that matches the select value.
  const totalPrice = selectedProduct ? selectedProduct.price * counter : 0 // this function makes sure a product is selected and it calculates the total price. If there is no selected product, it returns the value of 0.


  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    if (counter !== 1) {
      setCounter(counter - 1)
    }
  }

  const handleInputChange = (event) => {
    setSelect(event.target.value)
    }


  return(
    <div>

      <h3>select product</h3>

     

    <div className='dropdown'>
      <p>product:</p> 
      <select value={select} onChange={handleInputChange}>  {/*Changes the value select, to the value of the selected dropdown item*/}
    {
      products.map (p => 
       <option value={p.name} key={p.name}>{p.name} ({p.price})€</option>
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

    <OrderInfo product={select} counterValue = {counter} totalPrice={totalPrice}/>

    </div>

  )
}

function OrderInfo({product, counterValue, totalPrice}) {


  return(

    <div>
    <h3>Order info</h3>
    <div className='grid-container'>
      <div className='grid-item'>Product</div>
      <div className='grid-item'>Quantity</div>
      <div className='grid-item'>Total</div>
      <div className='grid-item'>{product}</div>   {/*Display the selected value*/}
      <div className='grid-item'>{counterValue}</div>
      <div className='grid-item'>{totalPrice}€</div>

    </div>


    </div>
   

  )
}






export default App

