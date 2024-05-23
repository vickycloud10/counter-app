import React from 'react'

export default function Button(ButtonProps) {
  return (
    <button className='btn btn-primary' onClick={ButtonProps.handlerFunction}>
        {ButtonProps.description}
    </button>
  )
}
