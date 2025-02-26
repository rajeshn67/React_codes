
import React from 'react'
import './usercard.css'
import { useState } from 'react'
function Counter () {
  const [count,setcount]=useState(0)
  return (
    <div className="contener">
      <p id ="p1">counter added {count} times</p>
      <button id="btn" onClick={()=>{setcount(count+1)}}>Click me</button>
    </div>
  )
}

export default Counter 




