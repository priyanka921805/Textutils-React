import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/aboutText">{props.aboutText}</a>
        </li>        */}
      </ul>
      <form className="d-flex" role="search"> 
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input btn btn-danger mx-1" onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault" /> 
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Color </label>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input btn btn-warning  mx-1" onClick={props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Yellow Color </label>
        </div>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
     <input className="form-check-input btn btn-success  mx-1" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Green Color </label>
    </div>

      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input mx-1" onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Darkmode</label>
</div>

    </div>
  </div>
</nav>
  )
}

// Proptypes is the type of properties used in reactApp.

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

// Default properties also set for default Values.

Navbar.defaultProps = {
    title: 'Set Title Here' ,
    aboutText: 'set text here'
  };


