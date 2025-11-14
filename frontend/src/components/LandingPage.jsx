import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const LandingPage = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <div 
          id="homeFullScreen" 
          className="h-screen bg-cover bg-center flex items-center justify-center text-center relative" 
          style={{ backgroundImage: "url('/images/header.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
          <motion.div
            className="relative header-text text-white px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[52px] md:text-[60px] font-extrabold tracking-tight">
              Barakah Roots, Kenya Youth Agricultural Initiative
            </h1>
            <div className="h-0.5 bg-white w-[150px] mx-auto mt-[15px] mb-[30px]"></div>
            <p className="text-[22px] md:text-[26px]">Rooted in Action, Harvesting Prosperity</p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#get-involved" className="px-6 py-3 rounded-md bg-cta-bg text-white hover:bg-opacity-80 transition-colors">Get Involved</a>
              <a href="/projects" className="px-6 py-3 rounded-md bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-colors">View Projects</a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Feature */}
      <section className="feature container mx-auto">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 items-center">
            <div className="feature-box p-[20px]">
              <h1 className="text-[35px] uppercase font-semibold" style={{ marginTop: '2em' }}>Our Mission</h1>
              <p className="text-[25px] text-justify">
                Barakah Roots is a youth-led movement dedicated to planting high-value fruit trees to fight climate change, create economic opportunities, ensure food security, and empower communities by 2030 and beyond.
              </p>
            </div>
            <div className="nopadding">
              <img src="/images/1.png" alt="Feature" className="w-full rounded-lg shadow" />
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid md:grid-cols-2 items-center">
            <div className="nopadding order-last md:order-first">
              <img src="/images/1.png" alt="Feature" className="w-full rounded-lg shadow" />
            </div>
            <div className="feature-box p-[20px]">
              <h1 className="text-[35px] uppercase font-semibold" style={{ marginTop: '2em' }}>Our Vision</h1>
              <p className="text-[25px] text-justify">
                By 2030, every household will have a fruit tree that feeds, empowers, and enriches, building a world where youth and nature prosper together.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Portfolio */}
      <section className="portfolio container mx-auto">
        <div className="text-center">
          <h1 className="heading text-[35px] uppercase font-semibold my-[50px]">Our Projects</h1>
        </div>
        <AnimatedSection>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 px-4">
            {['p-1.png','p-2.png','p-3.png','p-4.png','p-5.png','p-6.png'].map((img) => (
              <motion.div key={img} whileHover={{ scale: 1.03 }} className="w-full">
                <img src={`/images/${img}`} alt={`Project ${img}`} className="w-full rounded-lg shadow" />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Call to Action */}
      <section id="get-involved" className="call-top-action text-center bg-cta-bg text-white py-[50px] mt-[50px]">
        <div className="container mx-auto px-4">
          <h1 className="text-[35px] uppercase mb-[25px]">Get Involved</h1>
          <p className="text-[22px] mb-[20px]">
            There are many ways to get involved, from volunteering and donating to sponsoring a tree.
            <br />
            Join us in our mission to create a sustainable future.
          </p>
          <motion.span className="text-[24px] font-bold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            JOIN THE MOVEMENT
          </motion.span>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
