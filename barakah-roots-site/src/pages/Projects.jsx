import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="container mx-auto py-20">
      <title>Our Projects - Barakah Roots</title>
      <meta name="description" content="Explore the planting drives and agricultural projects by Barakah Roots across Kenya." />
      <h1 className="text-4xl font-bold text-center text-deep-olive">Our Projects</h1>
      <p className="text-center text-barakah-text mt-4 max-w-3xl mx-auto">
        From the highlands to the coast, we are actively working on projects that make a real difference. Explore our current and completed planting drives below.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;