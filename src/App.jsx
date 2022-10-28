import './index.css'
import { useState } from 'react'

function App() {

  const [hasil, updateHasil] = useState(0)


  return (
    <div>
      <section className='mx-auto w-96 my-20 h-96 border-2 border-gray-400'>
        <p className='p-3 m-5 ring-2 ring-gray-600 rounded-md text-right text-xl'>{hasil}</p>
        <section className='grid grid-cols-4 gap-5 p-6'>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300'>C</button>

          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300'></button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300'></button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300' onClick={function (){
            updateHasil("*")
          }}>*</button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300' onClick={function (){
            updateHasil(7)
          }}>7</button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300' onClick={function (){
            updateHasil(8)
          }}>8</button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300' onClick={function (){
            updateHasil(9)
          }}>9</button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300' onClick={function (){
            updateHasil("/")
          }}>/</button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300' onClick={function (){
            updateHasil(4)
          }}>4</button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300' onClick={function (){
            updateHasil(5)
          }}>5</button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300' onClick={function (){
            updateHasil(6)
          }}>6</button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300' onClick={function (){
            updateHasil("-")
          }}>-</button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300' onClick={function (){
            updateHasil(1)
          }}>1</button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300' onClick={function (){
            updateHasil(2)
          }} >2</button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300' onClick={function (){
            updateHasil(3)
          }}>3</button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300' onClick={function (){
            updateHasil("+")
          }}>+</button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300'></button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300' onClick={function (){
            updateHasil(0)
          }}>0</button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300'></button>
          <button className='text-2xl ring-2 ring-violet-900 rounded-sm hover:bg-violet-900 hover:text-white duration-300 delay-300'>=</button>
        </section>
      </section>
    </div>
  )
}

export default App
