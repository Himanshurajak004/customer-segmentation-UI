import React from 'react'

const three = () => {
  return (
    <div className="h-105 w-1/5 bg-gray-300 rounded-2xl w-60 ">
       <img src="https://images.unsplash.com/photo-1615561177861-76ac4aeeed8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
       className = "h-full w-full rounded-2xl object-cover"/>

       <p className='text-white font-bold text-s relative bottom-58 opacity-80 left-8'>
            customers are <br/> from near-prime <br/> and subprime<br/>segments with no<br/> access to bank <br/>credit


            <button className=" mt-6 flex items-center justify-between px-4 py-2 w-38 bg-lime-400 text-white text-sm font-semibold
    rounded-full">
  <span>Underbanked</span>

  <span
    className="
      ml-3
      flex items-center justify-center
      w-6 h-6
      bg-lime-700
      rounded-full ">
    <i className=" ri-arrow-right-line text-xs"></i>
  </span>
</button>
          </p>


          
    </div>
  )
}

export default three
