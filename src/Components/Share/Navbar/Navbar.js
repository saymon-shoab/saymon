import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <h4 style={{color:'rgb(224 21 21)'}} >SAYMON-SHOAB</h4> 
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link to='/' className="nav-link ms-3 active" aria-current="page" href="#">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to='/about' className="nav-link ms-3" href="#">About Me</Link>
                      </li>
                      <li className="nav-item">
                        <Link to='/project' className="nav-link ms-3" href="#">Projects</Link>
                      </li>
                   
                      <li className="nav-item">
                      <Link to='/blog' className="nav-link ms-3" href="#">Blogs</Link>
                      </li>
                      <li className="nav-item">
                      <Link to='/contact' className="nav-link ms-3" href="#">Contact</Link>
                      </li>
                     
                 
                 
                    </ul>
                
                  </div>
                </div>
              </nav>
                </div>
    );
};

export default Navbar;