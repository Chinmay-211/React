import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode==='dark'?'white':'black'}`} href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${props.mode==='dark'?'white':'black'}`} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode==='dark'?'white':'black'}`} to="/about">Link</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="form-check form-switch text-white">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togle}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
          </div>
        </div>
      </div>
    </nav>
  );
}
