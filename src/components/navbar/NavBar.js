import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import Select from "react-select";
import countryList from "../../assets/CountryList";

export class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "World",
      darkModeStatus: false,
    };
  }

  handleChange = (selectedOption) => {
    const { setTheCountry } = this.props;
    this.setState({ selectedOption: selectedOption });
    setTheCountry(selectedOption.value);
  };

  darkModeEnable = () => {
    const { darkMode } = this.props;
    const { darkModeStatus } = this.state;
    this.setState({ darkModeStatus: !darkModeStatus });
    darkMode();
  };

  render() {
    const { selectedOption, darkModeStatus } = this.state;
    const mode = darkModeStatus ? "dark" : "light";
    const navClasses = `navbar fixed-top navbar-expand-lg navbar-${mode} bg-${mode}`;
    return (
      <div>
        <nav className={navClasses}>
          <div className="container-fluid">
            <Link className="navbar-brand nav-link" to="/general">
              <img src={logo} alt="" width="30" height="24" />
              &nbsp;<b>InTheNews</b>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={countryList}
                  />
                </li>
                <li className="nav-item" style={{ marginLeft: "32px" }}>
                  <button
                    type="button"
                    className={`btn-sm btn-${
                      !darkModeStatus ? "dark" : "light"
                    }`}
                    onClick={this.darkModeEnable}
                  >
                    {darkModeStatus ? "Go Light Mode" : "Go Dark Mode"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
