import React, { Component } from "react";
import "./index.css";
import Circle from "./components/Circle";
import Header from "./components/Header";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    circles: [1, 2, 3, 4],
  };
  render() {
    return (
      <div className="app">
        <div>
          <Header />
        </div>
        <div className="circle-Container">
          {this.state.circles.map((circle) => (
            <Circle />
          ))}
        </div>

        <div>
          <Modal />
        </div>

        <div>
          <button id="start">Start Game</button>
          <button id="end">End Game</button>
        </div>
      </div>
    );
  }
}

export default App;
