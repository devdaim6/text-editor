import React,{useState} from "react";
import propTypes from "prop-types";

export default function Navbar(props) {
  const [mode,setMode]=useState('black');
  const [modeText,setModeText]=useState('Light');
  const [text,setText]=useState();
  const updateMode=()=>{
// console.log("hi")
if(mode==="black")
setMode('white');
else
setMode("black")
if(mode==="black")
setModeText('Dark')
else
setModeText("Light")
if(mode==="black")
setText('black');
else
setText('white')
}



  return (
    <div className={`bg-${mode}`}>
    <nav
      className={`navbar navbar-dark bg-${mode} navbar-expand-lg navbar-expand-md navbar-expand bg-opacity-25 `}
      aria-label="First navbar example"
    >
     
      <div className={`container-fluid  `}>
        <a className={`navbar-brand  `} href="/">
          <em className={`text-${text}`}>{props.title}</em> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample01"
          aria-controls="navbarsExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample01">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item"></li>
            <li className="nav-item"></li>
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
          <div class="form-check form-switch"   >
            <input
          onChange={updateMode}
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="darkmode"
            />
            <label class={`form-check-label` } htmlFor="darkmode">
              Enable {modeText} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

// eslint-disable-next-line react/no-typos
Navbar.propTypes = {
  title: propTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "DevDaim",
};
