import React from 'react'
import Buttons from "../Buttons/Buttons"
import "./Header.scss";

const Header = () => {
  return (
    <div className='header'>
        <h1 className='header__title'>HELLO 👋, I'M ANDREW DOHERTY</h1>
        <h3 className='header__info'>I'm a Junior Software developer from Manchester, UK</h3>
        <Buttons title={"TAKE A LOOK AT MY PROJECTS"} />
    </div>
  )
}

export default Header