import React from 'react'

const Word = ({ value, hidden = false }) => {
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

export default Word;