import React from 'react'
import One from './One'
import Two from './Two'
import Three from './Three'
const rightcont = () => {
  return (
    <div className='h-full w-3/4 bg-white p-4 '>
       
        <div className = "flex justify-around">
        <One/>
        <Two/>
        <Three/>
        </div>
        
    </div>
  )
}

export default rightcont
