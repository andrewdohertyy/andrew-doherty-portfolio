import React from 'react'
import "./About.scss"

const About = ({title}) => {
  return (
    <div className='about'>
        <h1 className='about__title'>{title}</h1>
        <h3 className='about__info'>Here's a little more information about me, my skills as a developer and what I like to do in my free time.</h3>
    </div>
  )
}

export default About