import React, { Component } from 'react'
import ComputerListComponent from '../components/ComputerListComponent'
import Footer from "../components/Footer";

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <ComputerListComponent />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing