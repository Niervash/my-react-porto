import React from 'react'
import './navbar.css'
import logo from './images/Logo_trasnparent.png'

function Navbar() {
  return (
        // navigation bar start
          <nav className="navbar navbar-expand-lg fixed-top shadow p-3 mb-5 bg-white rounded">
            <div className="container">
              <img src = {logo} alt="Julian_Porto" width="150" height="50" className='logo' href="#"/>
              <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mx-lg-2" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mx-lg-2" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mx-lg-2" href="#">Portofolio</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mx-lg-2" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <a href="https://github.com/Niervash" class="navbar-brand fa-brands fa-github"></a>
              <a href="https://www.instagram.com/wit_jakk/" class="navbar-brand fa-brands fa-instagram"></a>
              <a href="https://www.linkedin.com/in/julian-witjaksono-aa706a200/" class="navbar-brand fa-brands fa-linkedin"></a>
              <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
        // end navigation bar

        // Hero selection
        
  )
}

export default Navbar;
