import React, { useState } from 'react'
import { RefreshCcwDot } from "lucide-react";

const App = () => {
  const [count, setCount]=useState(0);
  const [inputValue,setInputValue]=useState(0)
  let reset =()=>{
   setCount(0)
  }
  let increment=()=>{
    setCount((prev)=>prev+1)
  }
  let decrement =()=>{
    setCount((prev)=>prev-1)
  }
  let putValue=()=>{
    setCount(Number(inputValue))
  }
 
  
  return (
    <>
      <div className="bg-gray-300 h-screen flex justify-center items-center flex-col gap-5">
        <div className="bg-radial bg-slate-200 p-5 rounded-2xl shadow-2xl">
          <h1 className="text-3xl font-bold text-center">Counter App</h1>
          <div>
            <p className="text-center mb-2 font-bold text-4xl">{count}</p>
            <div className="flex flex-col gap-4 md:flex-row">
              <button
                className="bg-indigo-300 px-2 py-2 rounded-2xl text-2xl"
                onClick={increment}
              >
                + Increment
              </button>
              <button
                className="bg-pink-300 px-2 py-2 rounded-2xl text-2xl"
                onClick={decrement}
              >
                - Dncrement
              </button>
              <button
                className="bg-fuchsia-300 px-4 py-2 rounded-2xl text-2xl"
                onClick={reset}
              >
                Reset
              </button>
            </div>
            <div className="mt-4 text-center ">
              <input
                className="bg-white px-2 py-3 rounded-2xl mb-4"
                type="text"
                placeholder="Enter any number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                className="bg-amber-600 px-4 py-2 rounded-2xl text-2xl ml-5"
                onClick={putValue}
              >
                Enter value
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App