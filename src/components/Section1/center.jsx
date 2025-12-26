import React from 'react'
import Left from './LeftCont'
import Right from './RightCont'

const center = () => {
  return (
    <div className = " flex justify-between py-10 px-10 h-[78vh] gap-11 bg-white">
      <Left/>
      <Right/>
    </div>
  )
}

export default center
