
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-8">
        Gen Z Fruit Trees is a youth-led movement dedicated to planting high-value fruit trees—such as Hass avocado, macadamia, and mangoes—to fight climate change, create economic opportunities, ensure food security, and empower communities by 2030 and beyond.
      </p>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg">
          To plant fruit trees that sequester carbon, cool urban areas, and restore ecosystems degraded by climate change.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg">
          By 2030, every household will have a fruit tree that feeds, empowers, and enriches, building a world where youth and nature prosper together.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4">Our Objectives</h2>
        <ul className="list-disc list-inside text-lg">
          <li>To create jobs, reduce poverty, and generate income for youth and communities through agroforestry and sustainable agriculture.</li>
          <li>To provide free workshops on agroforestry, entrepreneurship, and carbon accounting, equipping members with skills for financial independence.</li>
          <li>To foster a global network of volunteers, advocates, and supporters committed to spreading the movement's mission.</li>
          <li>To increase access to fresh produce through widespread fruit tree planting, improving nutrition and resilience.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
