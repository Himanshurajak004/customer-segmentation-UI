import React from 'react'

const two = () => {
  return (
    <div className = "h-105 w-1/4 bg-gray-300 rounded-2xl w-60">
          <img src = "https://images.unsplash.com/photo-1575320955581-b48da031bf49?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           className= "rounded-2xl h-full w-full object-cover"/>

           <p className='text-white font-bold text-s relative bottom-58 opacity-80 left-8'>
            Prime customers,<br/> that have access <br/> to bank credit <br/> and are not satisfied <br/> with their current <br/>services

            <button className=" mt-6 flex items-center justify-between px-4 py-2 w-36 bg-blue-600 text-white text-sm font-semibold
    rounded-full">
  <span>Undeserved</span>

  <span
    className="
      ml-3
      flex items-center justify-center
      w-6 h-6
      bg-blue-700
      rounded-full

    ">
    <i className="ri-arrow-right-line text-xs"></i>
  </span>
</button> 
          </p>

          
    </div>
  )
}

export default two
