
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <AnimatedSection>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-base-100 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Nkubu Avocado Planting</h2>
          <p className="text-lg mb-4">
            In partnership with local farmers in Nkubu, we have planted over 500 Hass avocado trees. This project aims to boost the local economy, provide a sustainable source of income for families, and contribute to reforestation efforts.
          </p>
          <img src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1974&auto=format&fit=crop" alt="Avocado Planting" className="rounded-lg" />
        </motion.div>
        </AnimatedSection>
        <AnimatedSection>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-base-100 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Urban Greening Initiative</h2>
          <p className="text-lg mb-4">
            We are working to increase the green cover in urban areas by planting fruit trees in schools, parks, and other public spaces. This helps to combat the urban heat island effect, improve air quality, and provide fresh fruit to urban communities.
          </p>
          <img src="https://images.unsplash.com/photo-1588789214776-c7f3644e47e8?q=80&w=1974&auto=format&fit=crop" alt="Urban Greening" className="rounded-lg" />
        </motion.div>
        </AnimatedSection>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          You can be a part of these and other future projects. Your contribution can make a real difference.
        </p>
        <button className="bg-green-700 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-800">Join Us</button>
      </div>
    </div>
  );
};

export default Projects;
