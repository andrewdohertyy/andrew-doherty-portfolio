import React from 'react'
import linkedin from '../../assets/linkedin.png'
import "./Footer.scss"
import email from '../../assets/email.png'
import twitter from '../../assets/twitter.png'
import github from '../../assets/github.png'   

const Footer = () => {

  
  return (
    <footer className='footer'>
       <div className='footer__icons'>
        <div>
           <a href="https://www.linkedin.com/in/andrew-doherty-054781a1/" target="_blank" rel="noreferrer"  ><img src={linkedin} alt="LinkedIn" /></a>
        </div>
        <div>
            <a href="mailto:andrewdoherty1996@hotmail.co.uk"  target="_blank" rel="noreferrer"><img src={email} alt="email" /></a>
        </div>
        <div>
        <a href="https://twitter.com/andrew__codes" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter" /></a>
        </div>
        <div>
            <a href="https://github.com/andrewdohertyy" target="_blank" rel="noreferrer"><img src={github} alt="GitHub" /></a>
        </div>
       </div>
       <div className='footer__text'>
        <p>Made by Andrew Doherty 2022.</p>
        </div>
    </footer>
  )
}

export default Footer