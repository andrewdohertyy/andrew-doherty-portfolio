import React from 'react'
import "./Nav.scss"

const Nav = () => {
    return (

        <div className="nav">
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
              <option>Home</option>
              <option>About</option>
              <option>Projects</option>
              <option>Contact</option>           
            </ul>
          </section>
        </div>
      );
    };
    
    export default Nav;