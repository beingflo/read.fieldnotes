import React from 'react';
import logo from '/fieldnotes.png';
import '../style.css';
import Headline from './Headline';
import Features from './Features';
import Open from './Open';
import Pricing from './Pricing';
import Footer from './Footer';

const LandingPage = (): React.ReactElement => {
  return (
    <div className="flex flex-col py-8">
      <div className="flex flex-row px-16 w-full justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <img className="w-12 h-12" src={logo} />
          <div className="text-xl font-bold">fieldnotes</div>
        </div>
        <ul className="flex flex-row items-center gap-6">
          <li className="border-r border-gray-500 pr-6">Pricing</li>
          <li className="border-r border-gray-500 pr-6">Log in</li>
          <li className="border p-1 border-gray-500 rounded-sm shadow-md">
            Sign up
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
