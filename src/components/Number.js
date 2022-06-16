import React from 'react'

const Number = ({value = 0}) => {
  const result = String(value).padStart(2, "0");
  return (
      <div className='aspect'>
       <p>{result}</p>
      </div>
  )
}

export default Number;