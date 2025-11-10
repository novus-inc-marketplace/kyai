import React from 'react';

const LandingPage = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <div 
          id="homeFullScreen" 
          className="h-screen bg-cover bg-center flex items-center justify-center text-center" 
          style={{ backgroundImage: "url('/images/header.png')" }}
        >
          <div className="header-text text-white px-4">
            <h1 className="text-[60px] uppercase font-bold">Kenya Youth in Agriculture Initiative</h1>
            <div className="vertical-line h-0.5 bg-white w-[150px] mx-auto mt-[15px] mb-[30px]"></div>
            <p className="text-[26px]">Planting Seeds of Opportunity</p>
          </div>
        </div>
      </header>

      {/* Feature */}
      <section className="feature container mx-auto">
        <div className="grid md:grid-cols-2 items-center">
          <div className="feature-box p-[20px]">
            <h1 className="text-[35px] uppercase font-semibold" style={{ marginTop: '2em' }}>Our Mission</h1>
            <p className="text-[25px] text-justify">
              Gen Z Fruit Trees is a youth-led movement dedicated to planting high-value fruit trees to fight climate change, create economic opportunities, ensure food security, and empower communities by 2030 and beyond.
            </p>
          </div>
          <div className="nopadding">
            <img src="/images/1.png" alt="Feature" className="w-full" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 items-center">
          <div className="nopadding order-last md:order-first">
            <img src="/images/1.png" alt="Feature" className="w-full" />
          </div>
          <div className="feature-box p-[20px]">
            <h1 className="text-[35px] uppercase font-semibold" style={{ marginTop: '2em' }}>Our Vision</h1>
            <p className="text-[25px] text-justify">
              By 2030, every household will have a fruit tree that feeds, empowers, and enriches, building a world where youth and nature prosper together.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="portfolio container mx-auto">
        <div className="text-center">
          <h1 className="heading text-[35px] uppercase font-semibold my-[50px]">Our Projects</h1>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 px-4">
          <div className="w-full">
            <img src="/images/p-1.png" alt="Project 1" className="w-full" />
          </div>
          <div className="w-full">
            <img src="/images/p-2.png" alt="Project 2" className="w-full" />
          </div>
          <div className="w-full">
            <img src="/images/p-3.png" alt="Project 3" className="w-full" />
          </div>
          <div className="w-full">
            <img src="/images/p-4.png" alt="Project 4" className="w-full" />
          </div>
          <div className="w-full">
            <img src="/images/p-5.png" alt="Project 5" className="w-full" />
          </div>
          <div className="w-full">
            <img src="/images/p-6.png" alt="Project 6" className="w-full" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-top-action text-center bg-cta-bg text-white py-[50px] mt-[50px]">
        <div className="container mx-auto px-4">
          <h1 className="text-[35px] uppercase mb-[25px]">Get Involved</h1>
          <p className="text-[22px] mb-[20px]">
            There are many ways to get involved, from volunteering and donating to sponsoring a tree.
            <br />
            Join us in our mission to create a sustainable future.
          </p>
          <span className="text-[24px] font-bold">JOIN THE MOVEMENT</span>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
