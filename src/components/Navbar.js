import React, { useState } from "react";
import propTypes from "prop-types";
import Form from "./Form";
import Alert from "./Alert";
export default function Navbar(props) {
  const [mode, setMode] = useState('white');
  const [modeText, setModeText] = useState('dark');
  const [navText, setNavText] = useState("Dark");
  const [bg, setBg] = useState("");
  const [alert, setAlert] = useState(null);
  const [iconColor, setIconColor] = useState("");

  //On Switch Click
  const updateMode = () => {

    if (document.getElementById('darkmode').checked === false) {
      document.getElementById("root").style.background = "white"
    }
    else {
      document.getElementById("root").style.background = "#000000"
    }

    if (mode === "black") {
      setIconColor("black")
    }
    if (mode === "white") {
      setIconColor("white")
    }

    if (mode === "black") {
      setMode('white');
    }
    else {
      setMode("black")
    }

    if (mode === "black") {
      setModeText('dark')
      setBg("light")
      setNavText('Dark')
    }
    else {
      setModeText("light")
      setBg("dark")
      setNavText('Light')
    }
  }

  //alert function
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <nav
        className={`navbar bg-dark bg-${modeText}  navbar-expand bg-opacity-50`}
        aria-label="First navbar example"
      >
        <div className={`container-fluid  `}>
          <a className={`navbar-brand  `} href="/">
            <em className={`text-${modeText}`}>{props.title}</em>
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
            <div className="form-check form-switch"   >
              <input
                onChange={updateMode}
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="darkmode"
              />
              <label className={`form-check-label text-${modeText}  `} htmlFor="darkmode">
                Enable {navText} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <Alert alert={alert} />
      </div>
      <div className="container ">
        <Form showAlert={showAlert} theme={modeText} bg={bg} iconColor={iconColor} textMode={modeText} />
      </div>
    </>
  );
}

// eslint-disable-next-line react/no-typos
Navbar.propTypes = {
  title: propTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "DevDaim",
};
