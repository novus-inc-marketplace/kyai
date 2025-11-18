import React from 'react';

const workshops = [
  {
    id: 'ws_001',
    title: 'Introduction to Sustainable Agroforestry',
    description: 'Learn the basics of agroforestry and how to integrate trees into your farming system for long-term sustainability and profitability.',
    date: '2025-12-15',
  },
  {
    id: 'ws_002',
    title: 'Fruit Tree Pruning and Care',
    description: 'Master the art of pruning to improve the health, productivity, and longevity of your fruit trees.',
    date: '2026-01-20',
  },
  {
    id: 'ws_003',
    title: 'Organic Pest and Disease Management',
    description: 'Discover effective and environmentally friendly methods for managing pests and diseases in your orchard.',
    date: '2026-02-10',
  },
];

const Workshops = () => {
  return (
    <div className="container mx-auto py-20">
      <title>Training & Workshops - Barakah Roots</title>
      <meta name="description" content="Enhance your skills with our workshops on sustainable agriculture, agroforestry, and fruit tree management." />
      <h1 className="text-4xl font-bold text-center text-deep-olive">Training & Workshops</h1>
      <p className="text-center text-barakah-text mt-4 max-w-3xl mx-auto">
        We offer a range of workshops and training sessions to equip youth with the skills and knowledge needed for a successful career in agriculture.
      </p>
      <div className="space-y-8 mt-12">
        {workshops.map((workshop) => (
          <div key={workshop.id} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-deep-olive">{workshop.title}</h2>
            <p className="text-barakah-text mt-2"><strong>Date:</strong> {workshop.date}</p>
            <p className="text-barakah-text mt-2">{workshop.description}</p>
            <button className="mt-4 inline-flex items-center px-5 py-2 rounded-lg bg-light-green text-white font-semibold shadow-md transform transition-transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-4 focus:ring-light-green/40">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshops;