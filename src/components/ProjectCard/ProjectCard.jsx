import React from 'react'
import Buttons from '../Buttons/Buttons'
import "./ProjectCard.scss"
 

const ProjectCard = ({title, image, link, live, info}) => {

  let buttonTitle; 
  let codeTitle = 'Code'

  if (link === live ) {
    buttonTitle = 'Repo'
  } else if (link === "https://github.com/andrewdohertyy/_carsology-frontend") {
    buttonTitle = 'Backend'
    codeTitle = "Frontend"
  } else {
    buttonTitle = 'Live'
  }

  return (
    <div className='projectcard'>
        <img className='projectcard__image' src={image} alt="" />
        <div className='projectcard__group'>
        <h3 className='projectcard__title'>{title}</h3>
        <p className='projectcard__info'>{info}</p>
        <div className='buttons'>
        <Buttons title={codeTitle} link={link}/>
        <Buttons title={buttonTitle} link={live}/>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard