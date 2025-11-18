import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

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

const ImpactStat = ({ value, suffix, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-bold text-light-green">
        {inView ? <CountUp end={value} duration={2.5} /> : '0'}
        {suffix}
      </p>
      <p className="text-barakah-text">{text}</p>
    </div>
  );
};


const Home = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Barakah Roots — Kenya Youth Agricultural Initiative",
    "url": "https://barakahroots.org",
    "logo": "https://barakahroots.org/logo.png",
    "sameAs": [
      // Add social media links here
    ]
  };

  return (
    <div>
      <title>Barakah Roots - Plant a Tree, Grow a Future</title>
      <meta name="description" content="Barakah Roots empowers Kenyan youth to plant income-generating fruit trees — building jobs, cooling cities and feeding families." />
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <Hero />
      <section className="py-20 bg-warm-sand">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-deep-olive mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImpactStat value={10000} suffix="+" text="Trees Planted" />
            <ImpactStat value={500} suffix="+" text="Youth Trained" />
            <ImpactStat value={1000} suffix="+" text="Tonnes of CO₂ Sequestered" />
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