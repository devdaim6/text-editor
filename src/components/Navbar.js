import React from 'react'
import PropTypes from 'prop-types';
export default function Navbar(props){
    return(
           
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-expand-md navbar-expand" aria-label="First navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src="favicon.png" alt="Logo" />{props.title} </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarsExample01">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="/">Contact</a>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li> */}
          </ul>
          {/* <form role="search">
            <input className="form-control-sm" type="search" placeholder="Search" aria-label="Search"/>
          </form> */}
        </div>
      </div>
    </nav>
      
    );
}


// eslint-disable-next-line react/no-typos
Navbar.PropTypes={
  title:PropTypes.string.isRequired
};

Navbar.defaultProps={
  title:"DevDaim"
};