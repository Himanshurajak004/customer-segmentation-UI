import React from 'react'
import 'remixicon/fonts/remixicon.css'

const leftcont = () => {
  return (
    <div className ='h-full w-1/3 bg-white rounded-4xl flex-col'>
     <div className = "py-13 px-8 ">
      <h3 className = "text-4xl  font-bold leading-12">
        Prospective <br/> <span className='bg-gray-100  px-3 py-1.3 -m-2 -mx-1 rounded-full '>Customer</span>{" "}Segmentation
      </h3>

      <p className = "text-gray-500 font-semibold py-5 opacity-65">Depending on customer satisfaction <br/> and acesses to banking products <br/> potentials , targets audience can be <br/>divided into three groups these groups <br/> help identify customer needs </p>
     </div>
     

     <div className = "text-5xl" >
      <i className="ri-arrow-right-up-line  px-6"></i>
     </div>
         
     </div>
  )  
}

export default leftcont
