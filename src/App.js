import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ProfilesList from "./component/Profiles.js";

class App extends Component {
  state = { dinosaurs: [] };

  constructor(props) {
    super(props);
    this.state = { dinosaurs: [] };
  }

  componentDidMount() {
    this.getDinosaurs();
  }

  getDinosaurs = () => {
    return fetch("./dinosaurs.json")
      .then(response => response.json())
      .then(dinosaurs => this.setState({ dinosaurs }));
  };
  render() {
    return (
      <div>
        <Header />
        <main>
          <h2>Profiles</h2>
          <ul id="profiles">
            <ProfilesList dinosaurs={this.state.dinosaurs} />
          </ul>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
