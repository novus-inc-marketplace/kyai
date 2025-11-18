import React, { useState, useEffect } from 'react';

const Adopt = () => {
  const [seedlings, setSeedlings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/seedlings')
      .then((res) => res.json())
      .then((data) => setSeedlings(data));
  }, []);

  return (
    <div className="container mx-auto py-20">
      <title>Adopt a Seedling - Barakah Roots</title>
      <meta name="description" content="Sponsor a seedling and contribute to a greener future for Kenya. Choose from a variety of income-generating fruit trees." />
      <h1 className="text-4xl font-bold text-center text-deep-olive">Adopt a Seedling</h1>
      <p className="text-center text-barakah-text mt-4 max-w-3xl mx-auto">
        Your contribution helps us plant more trees, empower more youth, and build a more sustainable future. Choose a seedling to sponsor below.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {seedlings.map((seedling) => (
          <div key={seedling.id} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-deep-olive">{seedling.name}</h2>
            <p className="text-3xl font-bold text-light-green mt-2">${seedling.price_usd}</p>
            <p className="text-barakah-text mt-4">{seedling.description}</p>
            <ul className="mt-4 space-y-2">
              {seedling.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center">
                  <svg className="w-5 h-5 text-light-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-barakah-text">{benefit}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-light-green text-white font-semibold shadow-md transform transition-transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-4 focus:ring-light-green/40">
              Adopt Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adopt;