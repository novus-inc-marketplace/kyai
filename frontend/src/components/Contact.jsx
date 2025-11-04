
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <form className="w-full max-w-lg bg-base-100 rounded-lg shadow-md p-8">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-neutral text-xs font-bold mb-2" htmlFor="grid-name">
                  Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-neutral border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Jane Doe" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-neutral text-xs font-bold mb-2" htmlFor="grid-email">
                  Email Address
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-neutral border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-neutral text-xs font-bold mb-2" htmlFor="grid-message">
                  Message
                </label>
                <textarea rows="5" className="appearance-none block w-full bg-gray-200 text-neutral border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Your message..."></textarea>
              </div>
              <div className="flex justify-between w-full px-3">
                <button className="shadow bg-primary hover:bg-opacity-80 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <div className="bg-base-100 rounded-lg shadow-md p-8">
            <p className="text-lg mb-4">
              <strong>Email:</strong> info@genzfruittrees.org
            </p>
            <p className="text-lg mb-4">
              <strong>Phone:</strong> +254 790 147944
            </p>
            <p className="text-lg">
              <strong>Address:</strong> Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
