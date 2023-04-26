import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {IoIosCart} from 'react-icons/io'
import LogIn from './LogIn'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">FARZ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Grocery</a></li>
            <li><a className="dropdown-item" href="/">Electronics</a></li>
            <li><a className="dropdown-item" href="/">Makeup</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Clothes</a></li>
            <li><a className="dropdown-item" href="/">Furniture</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Us</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link " href='/'>Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='/'><IoIosCart/>Cart<sup class="badge text-bg-secondary">1</sup></a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href={<LogIn/>}>LogIn</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search for Items" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}


