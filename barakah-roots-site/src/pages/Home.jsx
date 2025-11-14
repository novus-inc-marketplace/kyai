import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'proj_001',
    title: 'Nkubu Avocado Drive',
    location: { name: 'Nkubu, Meru', lat: -0.201, lng: 37.6 },
    tree_type: 'Hass Avocado',
    status: 'ongoing',
    planted: 500,
    goal: 2000,
    start_date: '2025-03-01',
    end_date: '2026-03-01',
    description: '...',
    photos: ['/placeholder.jpg'],
    contact: { name: 'Denis Mutugi', phone: '+254790147944' },
  },
  // Add more sample projects here
];

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="py-20 bg-warm-sand">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-deep-olive mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-light-green">10,000+</p>
              <p className="text-barakah-text">Trees Planted</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-light-green">500+</p>
              <p className="text-barakah-text">Youth Trained</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-light-green">1,000+</p>
              <p className="text-barakah-text">Tonnes of CO₂ Sequestered</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-cream">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-deep-olive text-center mb-8">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;