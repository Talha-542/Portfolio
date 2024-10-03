import React from 'react';
import './Project.css';

export default function Projects() {
  return (
    <section className="projects-section">
        <div className='content'>
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">
        As a seasoned creator of user-friendly web designs and digital solutions, I am here to assist you in constructing the brand of your dreams.
      </p>
      </div>
      <div className="projects-grid">
        <div className="project-card">
          <img src="image_url" alt="Travel Admin App" className="project-image" />
          <h3 className="project-name">Traveronto Admin</h3>
          <p className="project-category">WebApp</p>
        </div>
        <div className="project-card">
          <img src="image_url" alt="Other Project" className="project-image" />
          <h3 className="project-name">Boris Bowman</h3>
          <p className="project-category">Web App</p>
        </div>
        <div className="project-card">
          <img src="image_url" alt="Senta" className="project-image" />
          <h3 className="project-name">Micheal Johnstone</h3>
          <p className="project-category">Portfolio</p>
        </div>
        <div className="project-card">
          <img src="image_url" alt="Senta" className="project-image" />
          <h3 className="project-name">Nymbus Synergy</h3>
          <p className="project-category">Website</p>
        </div>
      </div>
    </section>
  );
}
