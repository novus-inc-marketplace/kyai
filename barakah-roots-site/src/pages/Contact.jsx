import React from 'react';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div className="container mx-auto py-20">
      <title>Contact Us - Barakah Roots</title>
      <meta name="description" content="Get in touch with Barakah Roots. We'd love to hear from you. You can also find our official documents here." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-deep-olive">Contact Us</h1>
          <p className="text-barakah-text mt-4">
            Have a question, a proposal, or just want to say hello? Send us a message, and we'll get back to you as soon as possible.
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-barakah-text"><strong>Email:</strong> info@barakahroots.org</p>
            <p className="text-barakah-text"><strong>Phone:</strong> +254 123 456 789</p>
            <p className="text-barakah-text"><strong>Address:</strong> Nairobi, Kenya</p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-deep-olive">Transparency</h2>
            <p className="text-barakah-text mt-2">
              We believe in full transparency. You can view our guiding documents below.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="/Constitution of Gen Z Fruit Trees.docx" className="text-light-green font-semibold hover:text-deep-olive transition-colors">Constitution</a>
              <a href="/Manifesto for Gen Z Fruit Trees.docx" className="text-light-green font-semibold hover:text-deep-olive transition-colors">Manifesto</a>
            </div>
          </div>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;