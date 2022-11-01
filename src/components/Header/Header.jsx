import React from 'react'
import Buttons from "../Buttons/Buttons"
import "./Header.scss";

const Header = () => {
  return (
    <div className='header'>
        <h1 className='header__title'>HELLO 👋, I'M ANDREW DOHERTY</h1>
        <h3 className='header__info'>I'm a Junior Software Developer from Manchester, UK</h3>
        <a href="#projects"><button className='header__button'> TAKE A LOOK AT MY PROJECTS</button></a>
    </div>
  )
}

export default Header