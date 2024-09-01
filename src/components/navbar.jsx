import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary justify-content-center">
        <a className="navbar-brand">
          <i className="bi bi-pc-display-horizontal" />
          {"  Jetbot Controller"}
        </a>
      </nav>
    );
  }
}

export default Navbar;
