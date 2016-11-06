import React from 'react'
import './Navbar.css'

const Navbar = () => (
    <nav className="nav">
      <div className="container">
        <div className="nav-left">
          <a className="nav-item is-brand" href="#">
            React-Redux-Todo
          </a>
        </div>
        <div className="nav-center">
          <a className="nav-item" href="#">
            <span className="icon">
              <i className="fa fa-github"></i>
            </span>
          </a>
        </div>
      </div>
    </nav>
)

export default Navbar
