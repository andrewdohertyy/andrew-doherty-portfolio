import React from 'react'
import "./Buttons.scss"

const Buttons = ({title}) => {
  return (
    <div>
        <button className='button'>{title}</button>
    </div>
  )
}

export default Buttons