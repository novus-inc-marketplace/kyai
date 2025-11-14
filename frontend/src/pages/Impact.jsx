import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Stat = ({ label, value }) => (
  <div className="bg-base-100 rounded-lg shadow p-6 text-center">
    <div className="text-4xl font-extrabold text-jungle">{value}</div>
    <div className="mt-2 text-neutral">{label}</div>
  </div>
);

const Impact = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-extrabold text-jungle mb-6">Impact Dashboard</h1>
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6">
            <Stat label="Trees Planted" value="500+" />
            <Stat label="CO₂ Sequestered/Year" value="24,000+ lbs" />
            <Stat label="Youth Trained" value="200+" />
            <Stat label="Communities Engaged" value="15+" />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-jungle mb-4">Transparency & Reporting</h2>
            <p className="text-neutral text-lg">
              We track and share progress on planting, training, and funding. Annual reports detail trees planted, funds raised, and impacts achieved, aligning with our commitment to transparency and accountability.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Impact;