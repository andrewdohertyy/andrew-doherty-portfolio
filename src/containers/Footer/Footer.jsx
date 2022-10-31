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
           <img src={linkedin} alt="" />
        </div>
        <div>
            <img src={email} alt="" />
        </div>
        <div>
        <img src={twitter} alt="" />
        </div>
        <div>
            <img src={github} alt="" />
        </div>
       </div>
       <div className='footer__text'>
        <p>Made by Andrew Doherty 2022.</p>
        </div>
    </footer>
  )
}

export default Footer