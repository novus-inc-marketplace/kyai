import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-20">
      <title>About Barakah Roots - Our Mission & Vision</title>
      <meta name="description" content="Learn about the mission, vision, and values of Barakah Roots, a Kenya Youth Agricultural Initiative." />
      <h1 className="text-4xl font-bold text-center text-deep-olive">Our Mission & Vision</h1>
      <p className="text-center text-barakah-text mt-4 max-w-3xl mx-auto">
        Barakah Roots is a youth-led community-based organization dedicated to empowering young people in Kenya through sustainable agriculture. We believe in planting trees to grow a future for our communities, our country, and our planet. Our mission is to address the urgent challenges of climate change, youth unemployment, and food insecurity by creating green jobs and fostering a culture of environmental stewardship.
      </p>
      {/* Timeline / Milestones component will go here */}
    </div>
  );
};

export default About;