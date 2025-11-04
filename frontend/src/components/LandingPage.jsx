
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import AnimatedButton from './AnimatedButton';

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div>
      <div className="relative h-screen">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1558818498-28c1e002b655?q=80&w=2070&auto=format&fit=crop')",
            y 
          }}
        />
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.h1 
            className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Kenya Youth in Agriculture Initiative
          </motion.h1>
          <motion.p 
            className="mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Planting Seeds of Opportunity
          </motion.p>
        </div>
      </div>

      <AnimatedSection>
        <section className="bg-base-100 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">About Us</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Gen Z Fruit Trees is a youth-led movement dedicated to planting high-value fruit trees to fight climate change, create economic opportunities, ensure food security, and empower communities by 2030 and beyond.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-base-100 rounded-lg shadow-md">
                  <h3 className="text-3xl font-bold mb-2 text-primary">500+</h3>
                  <p className="text-lg">Trees Planted</p>
                </div>
                <div className="p-8 bg-base-100 rounded-lg shadow-md">
                  <h3 className="text-3xl font-bold mb-2 text-primary">100+</h3>
                  <p className="text-lg">Youth Empowered</p>
                </div>
                <div className="p-8 bg-base-100 rounded-lg shadow-md">
                  <h3 className="text-3xl font-bold mb-2 text-primary">10+</h3>
                  <p className="text-lg">Communities Reached</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="bg-base-100 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Get Involved</h2>
              <p className="text-lg max-w-3xl mx-auto mb-8">
                Join us in our mission to create a sustainable future. You can contribute by volunteering, donating, or sponsoring a tree.
              </p>
              <div className="flex justify-center space-x-4">
                <AnimatedButton>Volunteer</AnimatedButton>
                <AnimatedButton className="bg-secondary">Donate</AnimatedButton>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default LandingPage;
