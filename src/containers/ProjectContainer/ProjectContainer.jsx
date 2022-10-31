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
                live={project.live}
                />
            </div>
        );
    });
};


  return (
    <div className='projectContainer' id='projects'>
        <h1 className='projectContainer__title'>PROJECTS</h1>
        <h3 className='projectContainer__text'>Below is a list of my projects to date. They will all come with a link to my repos with the code. As well as this I also completed a real-life MVP for a development project, delivered
as a Scrum team to a client who will use it for future
development. It included a React front-end and Spring back-end integration, including authentication and CI deployment to GCP.</h3>
        <div className='projectContainer__items'>
            {projectsJSX(projects)}
        </div>
    </div>
  )
}

export default ProjectContainer