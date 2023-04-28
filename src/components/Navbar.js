import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <>
    <nav>
      <div className="navLinks">
        <NavLink className="link" to="/metrics_webapp_project/"><FontAwesomeIcon icon={faArrowLeft} /></NavLink>
        <NavLink className="link" to="/metrics_webapp_project/">
          Stocks
        </NavLink>

        <NavLink className="link" to="#">
          <FontAwesomeIcon icon={faMicrophone} />
        </NavLink>
      </div>
    </nav>
  </>
);

export default Navbar;
