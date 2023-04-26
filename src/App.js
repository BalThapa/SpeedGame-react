import React, { Component } from "react";
import "./index.css";
import Circle from "./components/Circle";
import Header from "./components/Header";
import Modal from "./components/Modal";

const getRanInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

class App extends Component {
  state = {
    circles: [1, 2, 3, 4],
    score: 0,
    counter: 0,
    active: 0,
    pace: 1000,
    displayModal: false,
    playStart: false,
  };

  timer;

  handleClick = (i) => {
    console.log(i);
    if (i !== this.state.active) {
      this.endGameHandler();
    } else {
      this.setState({
        score: this.state.score + 10,
        counter: 0,
      });
    }
  };

  startGameHandler = () => {
    console.log("start");
    this.setState({
      playStart: true,
    });
  };

  endGameHandler = () => {
    console.log("end");
    clearTimeout(this.timer);
    this.setState({
      score: 0,
      active: 0,
      dispalyModal: true,
    });
  };

  newitem = () => {
    let nextActive;

    do {
      nextActive = getRanInt(0, 3);
    } while (nextActive === this.state.active);
    if (this.state.counter >= 3) {
      return this.endGameHandler();
    }

    this.setState({
      active: nextActive,
      pace: this.state.pace - 10,
      counter: this.state.counter + 1,
    });

    this.timer = setTimeout(this.newitem, this.state.pace);
  };

  handleClose = () => {
    window.location.reload(); // NO RELOAD IN REACT
  };

  render() {
    return (
      <div className="app">
        <div>
          <Header />
          <p>
            Your Score: <span>{this.state.score}</span>
          </p>
        </div>

        <div className="circle-Container">
          {this.state.circles.map((i) => (
            <Circle
              key={i}
              active={this.state.active}
              index={i}
              click={() => this.handleClick(i)}
            />
          ))}
        </div>

        <div>
          {this.state.displayModal && (
            <Modal
              score={this.state.score}
              close={this.handleClose}
              endText={this.state.score}
            />
          )}
        </div>

        <div>
          <button id="start" onClick={this.startGameHandler}>
            Start Game
          </button>
          <button id="end" onClick={this.endGameHandler}>
            End Game
          </button>
        </div>
      </div>
    );
  }
}

export default App;
