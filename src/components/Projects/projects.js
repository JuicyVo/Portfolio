import React from 'react';
import './projects.css'

const ProjectGrid = ({ projects }) => {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <a href={project.link} key={index} className='project-button'>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </a>
      ))}
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      link: 'https://example.com/project3',
    },
    {
      title: 'Project 4',
      description: 'Description of Project 4',
      link: 'https://example.com/project4',
    },
  ];

  return (
    <div>
      <h2>My Projects</h2>
      <ProjectGrid projects={projectData} />
    </div>
  );
};

export { Projects, ProjectGrid };
