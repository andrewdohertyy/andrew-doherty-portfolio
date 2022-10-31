import React from 'react'
import "./Nav.scss"

const Nav = () => {
    return (

        <div className="nav" id='home'>
          <section class="top-nav">
            
              <nav className="nav__title--container">
                <div className="nav__title">Andrew Doherty</div>
                <img className="nav__car" src="" alt="" />
              </nav>
            
            <input id="menu-toggle" type="checkbox" />
            <label class="menu-button-container" for="menu-toggle">
              <div class="menu-button"></div>
            </label>
            <ul class="menu" >
              <a href='#about'>About</a>
              <a href='#projects'>Projects</a>
              <a href='#contact'>Contact</a>           
            </ul>
          </section>
        </div>
      );
    };
    
    export default Nav;