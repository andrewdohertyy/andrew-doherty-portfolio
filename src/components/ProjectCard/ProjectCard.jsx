import React from 'react'
import Buttons from '../Buttons/Buttons'
import "./ProjectCard.scss"
 

const ProjectCard = ({title, image, link, info}) => {

    console.log(image);

  return (
    <div className='projectcard'>
        <img className='projectcard__image' src={image} alt="" />
        <div className='projectcard__group'>
        <h3 className='projectcard__title'>{title}</h3>
        <p className='projectcard__info'>{info}</p>
        <Buttons title={"Code"} link={link}/>
        </div>
    </div>
  )
}

export default ProjectCard