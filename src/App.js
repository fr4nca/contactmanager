import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="John Doe"
            email="jdoe@gmail.com"
            phone="555-555-5555"
          />
          <Contact
            name="Ale Doe"
            email="aldoe@gmail.com"
            phone="555-555-5555"
          />
        </div>
      </div>
    );
  }
}

export default App;
