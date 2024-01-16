import React, { useState } from 'react';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h4 className="text-3xl text-black font-caprasimo">PORTFOLIO</h4>

        <button
          className="md:hidden focus:outline-none px-4 text-3xl text-black font-caprasimo"
          onClick={handleToggle}
        >
          ☰
        </button>

        <ul className={`md:flex md:flex-row lg:flex-row divide-x-8 text-2xl list-none font-10 text-end place-items-end mx-5 ${expanded ? 'block' : 'hidden'}`}>
          <li className="px-4 text-sm text-black font-semibold" onClick={handleToggle}>HOME</li>
          <li className="px-4 text-sm font-semibold" onClick={handleToggle}><a className="no-underline text-black " href="#about">ABOUT</a></li>
          <li className="px-4 text-sm  font-semibold" onClick={handleToggle}><a className="no-underline text-black " href="#services">SERVICES</a></li>
          <li className="px-4 text-sm  font-semibold" onClick={handleToggle}><a className="no-underline text-black " href="#skill">SKILLS</a></li>
          <li className="px-4 text-sm  font-semibold" onClick={handleToggle}><a className="no-underline text-black " href="#education">PROJECTS</a></li>
          <li className="px-4 text-sm  font-semibold" onClick={handleToggle}><a className="no-underline text-black " href="#project">PROJECTS</a></li>
          <li className="px-4 text-sm  font-semibold" onClick={handleToggle}><a className="no-underline text-black " href="#contact">CONTACTS</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
