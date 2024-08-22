import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      
        <div className="nav-v3">
          <Link to="/" data-ix="open-about-modal" aria-current="page" className="landing-link-about  ">Work</Link>
          <Link to="/Info" data-ix="open-about-modal" className="landing-link-about">info</Link>
           

        </div>
     
    </>
  );
};

export default Navbar;
