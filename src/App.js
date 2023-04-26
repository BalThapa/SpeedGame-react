import React, { Component } from "react";
import "./index.css";
import Circle from "./components/Circle";
import Header from "./components/Header";
import Modal from "./components/Modal";

const getRanInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

  handleClick = (circle) => {
    console.log("circle clicked,i");
    if (this.state.active !== circle) {
      return this.endGameHandler();
    }
    this.setState({
      score: this.state.score + 10,
      counter: this.state.counter - 1,
    });
  };

  startGameHandler = () => {
    console.log("start");
    this.setState({
      playStart: !this.state.playStart,
    });
    this.randomItem();
  };

  endGameHandler = () => {
    console.log("end");
    clearTimeout(this.timer);
    this.setState({
      displayModal: !this.state.displayModal,
    });
  };

  randomItem = () => {
    if (this.state.counter >= 5) {
      return this.endGameHandler();
    }
    let nextActive;

    do {
      // nextActive = getRanInt(0, 3);
      nextActive = getRanInt(1, this.state.circles.length); //FOR LONGER ARRAY
    } while (nextActive === this.state.active);

    this.setState({
      active: nextActive,
      pace: this.state.pace - 10, //it makes faster after every click, if * 0.95 for more faster.
      counter: this.state.counter + 1,
    });
    console.log("active");
    this.timer = setTimeout(this.randomItem, this.state.pace);
  };

  handleClose = () => {
    this.setState({
      displayModal: !this.state.displayModal,
      score: 0,
      counter: 0,
      pace: 1000,
      playStart: this.state.playStart,
    });
    // window.location.reload(); // NO RELOAD IN REACT
  };

  render() {
    return (
      <div className="app">
        <div>
          <Header />
          <p>Your Score:{this.state.score}</p>
        </div>

        <div className="circle-Container">
          {this.state.circles.map((circle) => (
            <Circle
              key={circle}
              active={this.state.active === circle}
              click={() => this.handleClick(circle)}
              playStatus={this.state.playStart}
            />
          ))}
        </div>

        <div>
          {this.state.displayModal && (
            <Modal score={this.state.score} close={this.handleClose} />
          )}
        </div>

        <div>
          {this.state.playStart ? (
            <button id="end" onClick={this.endGameHandler}>
              End Game
            </button>
          ) : (
            <button id="start" onClick={this.startGameHandler}>
              Start Game
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
