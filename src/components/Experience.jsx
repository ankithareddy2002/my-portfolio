// components/Experience.jsx
import React from 'react';


function Experience() {
  const experiences = [
    {
      role: "Engineering Student - B.E. in CSE",
      company: "Cambridge Institute of Technology, Bangalore",
      duration: "2021 - 2025",
      description: "Gained strong foundation in software development, programming languages, and web technologies. Focused on hands-on project work and continuous learning."
    },
    {
      role: "Certified Python Learner",
      company: "Deep Dive into Python Libraries",
      duration: "2023",
      description: "Completed certification covering key Python libraries and application-based mini projects."
    }
  ];

  return (
    <div className="experience-container">
      <h2 className="experience-title">My Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <p><strong>Company:</strong> {exp.company}</p>
            <p><strong>Duration:</strong> {exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;



