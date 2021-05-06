import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import TourList from "../TourList";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
      </React.Fragment>
    );
  }
}
