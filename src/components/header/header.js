import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
    return (


<header className="navbar navbar-expand-lg border-bottom border-light navbar-dark bg-dark shadow-lg sticky-top">
<a className="navbar-brand" href="/about">Jackson Smith</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="/about">Home <span className="sr-only">(current)</span></a>
    </li>
    <Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    Projects
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/portfolio">Portfolio</Dropdown.Item>
    <Dropdown.Item href="/portfolio#music">Music</Dropdown.Item>
    <Dropdown.Item href="/realestate">Real Estate</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    <li className="nav-item">
      <a className="nav-link" href="/contact">Contact</a>
    </li>
  </ul>
</div>
</header>

);
}

export default Header;