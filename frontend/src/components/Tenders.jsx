
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Tenders = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Tenders</h1>

      <AnimatedSection>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Available Tenders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-base-100 rounded-lg shadow-md">
            <thead>
              <tr className="w-full bg-gray-200 text-neutral uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Tender Title</th>
                <th className="py-3 px-6 text-left">Deadline</th>
                <th className="py-3 px-6 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="text-neutral text-sm font-light">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">Supply of Hass Avocado Seedlings</td>
                <td className="py-3 px-6 text-left">2025-12-31</td>
                <td className="py-3 px-6 text-center">
                  <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Open</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">Transportation of Seedlings</td>
                <td className="py-3 px-6 text-left">2026-01-15</td>
                <td className="py-3 px-6 text-center">
                  <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Pending</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">Nursery Management Services</td>
                <td className="py-3 px-6 text-left">2025-11-30</td>
                <td className="py-3 px-6 text-center">
                  <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Closed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </AnimatedSection>

      <AnimatedSection>
      <div>
        <h2 className="text-3xl font-bold mb-4">Submit Your Application</h2>
        <form className="w-full max-w-lg mx-auto bg-base-100 rounded-lg shadow-md p-8">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-neutral text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-neutral border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-neutral text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-neutral border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-neutral text-xs font-bold mb-2" htmlFor="grid-password">
                Email Address
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-neutral border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-neutral text-xs font-bold mb-2" htmlFor="grid-password">
                Tender Applying For
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-neutral py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>Supply of Hass Avocado Seedlings</option>
                  <option>Transportation of Seedlings</option>
                  <option>Nursery Management Services</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-neutral text-xs font-bold mb-2" htmlFor="grid-password">
                Message
              </label>
              <textarea rows="5" className="appearance-none block w-full bg-gray-200 text-neutral border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Your message..."></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <button className="shadow bg-primary hover:bg-opacity-80 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded transition-transform hover:scale-[1.02]" type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
      </AnimatedSection>
    </div>
  );
};

export default Tenders;
