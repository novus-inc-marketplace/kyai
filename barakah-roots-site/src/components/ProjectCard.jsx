import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow transform hover:-translate-y-1"
      whileHover={{ y: -6 }}
    >
      <img src={project.photos[0]} alt={project.title} className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold text-deep-olive">{project.title}</h3>
      <p className="text-barakah-text">{project.location.name}</p>
      <div className="flex space-x-2 mt-2">
        <span className="px-2 py-1 bg-light-green/20 text-light-green rounded-full text-sm">{project.tree_type}</span>
        <span className="px-2 py-1 bg-warm-sand/50 text-deep-olive rounded-full text-sm">{project.status}</span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;