import React from 'react'
import Computerguru from './asset/Computerguru.png';
import "./Navigation.css"
function Navigation() {
  return (
    <>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src= {Computerguru} width ="70%" height="60%"></img></a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">  <i class="bi bi-menu-button-wide"></i> </span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active mx-1" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-1" href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-1" href="/courses">Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-1" href="/photo">Photo Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-1" href="/contact">Contact Us</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}

export default Navigation