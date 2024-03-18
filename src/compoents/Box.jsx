import React from 'react'

function box( { value ,onBoxClick}) {
  return (
    <div>
      <button className="w-20 h-20 text-3xl text-center text-red-500 bg-white rounded-lg" onClick={onBoxClick}>
      {value}
      </button>
    </div>
  )
}

export default box
