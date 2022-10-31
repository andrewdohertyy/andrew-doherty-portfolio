import React from 'react'
import "./Buttons.scss"

const Buttons = ({title, link}) => {


  const handleClick = () => {
    window.open(link, '_blank');
  }

  return (
    <div>
        <button onClick={handleClick} className='button'>{title}<a href={link}></a></button>
    </div>
  )
}

export default Buttons