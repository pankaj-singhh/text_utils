import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="/Textform">Home</Link>
          {/* <link className="nav-link active" aria-current="page" to="/">Home</link> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">{props.other}</Link>
        </li>
        
      </ul>
      {/* light on/off (Switch)*/}
      {/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
   <label className="form-check-label" for = "flexSwitchCheckDefault">Default switch</label> 
</div> */}

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
