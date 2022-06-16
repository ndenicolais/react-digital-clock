import React from 'react'

export const Word = ({ value, hidden = false }) => {
  const getStyle = ()=> {
    return {
      visibility:  hidden ? 'hidden' : 'visible'
    }
  }
  return (
    <div className='aspect'>
      <p>{value}</p>
      <p style={getStyle()}>{value}</p>
    </div>
  )
}