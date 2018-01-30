import React, { Component } from "react";
import "./App.css";
import { Header } from "./Header.js";
import { Section } from "./Profiles";
import { Footer } from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("./dinosaurs.json")
      .then(response => response.json())
      .then(response => this.setState({ data: response }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Section dinosaurs={this.state.data} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
