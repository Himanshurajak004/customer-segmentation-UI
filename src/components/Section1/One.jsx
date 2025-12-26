import React from 'react'

const one = () => {
  return (
    <div className = "h-105 w-1/4 bg-gray-300 rounded-2xl w-60 ">
        <div className='rounded-2xl h-full w-full object-cover'> 

           <img src = "https://images.unsplash.com/photo-1636928332620-92cc7205b694?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         alt="cat" className="rounded-2xl h-full w-full object-cover "/>


          <p className='text-white font-bold text-s relative bottom-58 opacity-80 left-8'>
            Prime customers,<br/> that have access <br/> to bank credit <br/> 
            and are satisfied <br/> with their current <br/>product
                      
                      <button className=" mt-6 flex items-center justify-between px-4 py-2 w-32 bg-blue-600 text-white text-sm font-semibold
    rounded-full">
  <span>Satisfied</span>

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
    </div>
  )
}

export default one
