'use client'
import React, { useState } from 'react'

const react = () => {

    const [counter, setCounter] = useState(0)

  return (
    <div className='text-white  bg-black pt-9' >
    <center><h1 className='mt-10'>Number is {counter}</h1></center>
      <center><button onClick={()=>{setCounter(counter+2)}}>Increment</button></center>
      <center><button onClick={()=>{setCounter(counter-2)}}>Decrement</button></center>
    </div>
  )
}

export default react
