
import React from 'react';


function Project() {
  const projects = [
    {
      title: "College Fest Management System",
      tech: "HTML, CSS, PHP, JavaScript, MySQL",
      description: "Developed a web-based application to manage college fest events, participant registration, and scheduling."
    },
    {
      title: "Compression of Color Image",
      tech: "Python, Image Processing",
      description: "Built a project on compressing color images using Python and OpenCV to reduce file size while maintaining quality."
    }
  ];

  return (
    <div className="project-container">
      <h2 className="project-title">My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

