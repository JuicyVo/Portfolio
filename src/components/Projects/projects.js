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
      title: 'GPTinder',
      description: 'A dating app that uses chatgpt to create bots themed around characters alongside a working match making system',
      link: 'https://example.com/project1',
    },
    {
      title: 'Evento',
      description: 'A Meetup app where one can join events and host events',
      link: 'https://example.com/project2',
    },
    {
      title: 'Scheduler',
      description: 'Book appointments and edit them with teachers',
      link: 'https://example.com/project3',
    },
    {
      title: 'Tweeter',
      description: 'Twitter clone using AJAX',
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
