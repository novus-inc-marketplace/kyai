import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-extrabold text-jungle mb-4">About Barakah Roots</h1>
          <p className="text-neutral text-lg mb-8">
            Barakah Roots is a youth-led movement dedicated to planting high-value fruit trees—such as Hass avocado, macadamia, and mangoes—to fight climate change, create economic opportunities, ensure food security, and empower communities by 2030 and beyond.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-jungle mb-4">Our Mission</h2>
            <p className="text-neutral text-lg">
              To plant fruit trees that sequester carbon, cool urban areas, and restore ecosystems degraded by climate change.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-jungle mb-4">Our Vision</h2>
            <p className="text-neutral text-lg">
              By 2030, every household will have a fruit tree that feeds, empowers, and enriches, building a world where youth and nature prosper together.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-jungle mb-4">Objectives</h2>
            <ul className="list-disc list-inside text-neutral text-lg">
              <li>Environmental restoration through fruit tree planting.</li>
              <li>Economic empowerment for youth via agroforestry.</li>
              <li>Education and training in agroforestry and entrepreneurship.</li>
              <li>Community engagement and advocacy.</li>
              <li>Food security through increased access to fresh produce.</li>
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-jungle mb-4">Core Values</h2>
            <ul className="list-disc list-inside text-neutral text-lg">
              <li>Transparency</li>
              <li>Accountability</li>
              <li>Empowerment</li>
              <li>Sustainability</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-jungle mb-4">Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-base-100 rounded-lg shadow p-6">
                <p className="text-neutral text-lg">
                  "Last year, we worked with local farmers to plant 500 Hass avocado trees in Nkubu. Today, those trees are thriving, providing shade, oxygen, and hope for the future." — Denis Mutugi, Project Coordinator
                </p>
              </div>
              <div className="bg-base-100 rounded-lg shadow p-6">
                <p className="text-neutral text-lg">
                  "When I planted my first Hass avocado tree, I wasn't just planting a seed—I was planting hope. Within three years, that tree started producing fruit, feeding my family and bringing in extra income." — Ajuma Osembo, Youth Leader
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;