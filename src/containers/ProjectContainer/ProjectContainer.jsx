import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from "../../data/projects.js"
import "./ProjectContainer.scss"

const ProjectContainer = () => {

console.log(projects);

const projectsJSX = (projects) => {
    return projects.map((project, index) => {
        return (
            <div key={index}>
                <ProjectCard
                title={project.title}
                image={project.image}
                link={project.link}
                info={project.info}
                />
            </div>
        );
    });
};


  return (
    <div className='projectContainer'>
        <h1 className='projectContainer__title'>ProjectContainer</h1>
        <h2 className='projectContainer__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sequi id exercitationem ipsum, voluptatem quasi quibusdam pariatur facere ipsa quos, provident consequuntur perferendis accusantium aspernatur cumque nemo aliquid doloribus praesentium.</h2>
        <div className='projectContainer__items'>
            {projectsJSX(projects)}
        </div>
    </div>
  )
}

export default ProjectContainer