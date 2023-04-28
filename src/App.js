import React, { Component } from "react";
import "./app.css";
import Circle from "./components/Circle";
import Modal2 from "./components/Modal2";
import Modal from "./components/Modal";

import frogquack from "./assets/sounds/frogquack.mp3";
import gameStart from "./assets/sounds/gameStart.mp3";
import gamefinish from "./assets/sounds/gamefinish.wav";

let clickfrog = new Audio(frogquack);
let gameStartSound = new Audio(gameStart);
let gameFinishSound = new Audio(gamefinish);

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
    level: 0,
    displayModal: false,
    displayModal2: false,
    playStart: false,
    clickedlevel: false,
  };

  timer;

  handleClick = (circle) => {
    this.frogquackPlay();
    if (this.state.active !== circle) {
      return this.endGameHandler();
    }
    this.setState({
      score: this.state.score + 10,
      counter: this.state.counter - 1,
    });
  };

  frogquackPlay = () => {
    if (clickfrog.paused) {
      clickfrog.play();
    } else {
      clickfrog.currentTime = 0;
    }
  };

  startGameHandler = () => {
    gameStartSound.play();
    this.setState({
      playStart: !this.state.playStart,
    });
    this.randomItem();
  };

  endGameHandler = () => {
    gameStartSound.pause();
    gameFinishSound.play();
    clearTimeout(this.timer);
    this.setState({
      displayModal: !this.state.displayModal,
    });
  };

  levelHandler = () => {
    this.setState({
      displayModal2: !this.state.displayModal2,
    });
  };

  beginnerhandler = () => {};

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
    this.timer = setTimeout(this.randomItem, this.state.pace);
  };

  handleReplay = () => {
    this.setState({
      displayModal: false,
      score: 0,
      counter: 0,
      pace: 1000,
      active: 0,
      playStart: false,
    });
    // window.location.reload(); // NO RELOAD IN REACT
  };

  gameSpeed = (speed) => {
    if (speed === "beginner") {
      this.setState({
        pace: this.state.pace * 0.95,
      });
    } else if (speed === "intermediate") {
      this.setState({
        pace: this.state.pace * 0.85,
      });
    } else if (speed === "proffessional") {
      this.setState({
        pace: this.state.pace * 0.75,
      });
    }
    this.setState({
      speed,
      clickedlevel: true,
    });
  };

  render() {
    return (
      <div className="app">
        <div>
          <h1>SPEED GAME II</h1>
          <h2>LEVEL:{this.state.level}</h2>
          <p>SCORE:{this.state.score}</p>
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
            <Modal
              score={this.state.score}
              replay={this.handleReplay}
              {...this.state}
            />
          )}
        </div>

        <div>{this.state.displayModal2 && <Modal2 />}</div>

        <div>
          {this.state.playStart ? (
            <button onClick={this.endGameHandler}>End Game.</button>
          ) : (
            <button onClick={this.startGameHandler}>Start Game</button>
          )}
          {this.state.playStart ? (
            this.state.displayModal2
          ) : (
            <button onClick={this.levelHandler}>Level</button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
