/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './navBar.css';

export default function NavBar() {
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-dark container-fluid">
  <div class="container">
    <a class="navbar-brand text-light" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex-row-reverse " id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item ">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light">Disabled</a>
        </li>
        <div className="navButton">
      <button type="button" class="btn btn-primary">Primary</button>
      </div>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
