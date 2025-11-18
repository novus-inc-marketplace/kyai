import React from 'react';
import Form from '../components/Form';

const Volunteer = () => {
  return (
    <div className="container mx-auto py-20">
      <title>Volunteer with Barakah Roots</title>
      <meta name="description" content="Join our planting drives and volunteer your time to make a difference. Sign up to get involved with Barakah Roots." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-deep-olive">Get Involved</h1>
          <p className="text-barakah-text mt-4">
            We are always looking for passionate individuals to join our movement. Whether you can help with planting, logistics, or community outreach, your contribution is valuable. Fill out the form to express your interest, and we'll get in touch with upcoming opportunities.
          </p>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Volunteer;