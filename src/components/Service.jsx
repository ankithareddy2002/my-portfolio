import React from 'react';


function Service() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and modern websites using React, HTML, CSS, and JavaScript."
    },
    {
      title: "UI/UX Design",
      description: "Designing clean, user-friendly interfaces and improving user experience."
    },
    {
      title: "fortend developement",
      description: "Creating RESTful APIs and server-side logic with Node.js and Express."
    }
  ];

  return (
    <div className="service-section">
      <h2>My Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
