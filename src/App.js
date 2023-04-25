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
    timer: "",
    modal: false,
  };

  handleClick = (i) => {
    if (i === this.state.active) {
      this.setState({ score: this.state.score + 10 });
    } else {
      this.endGame();
    }
  };

  startGame = () => {
    this.pickNew();
  };

  endGame = () => {
    clearInterval(this.timer);
    this.setState({
      score: 0,
      active: 0,
      timer: clearTimeout(this.state.timer),
    });
    this.timer = setTimeout(this.pickNew, this.state.pace);
  };

  pickNew = () => {
    if (this.state.counter >= 3) {
      return this.endGame();
    }

    let nextActive;

    do {
      nextActive = getRanInt(0, 3);
    } while (nextActive === this.state.active);

    this.setState({
      active: nextActive,
      pace: this.state.pace - 10,
      counter: this.state.counter + 1,
    });
  };
  render() {
    const { score, modal } = this.state;
    return (
      <div className="app">
        <div>
          <Header />
          <p>
            Your Score: <span>{this.state.score}</span>
          </p>
        </div>

        <div className="circle-Container">
          {this.state.circles.map((circle, i) => (
            <Circle
              key={i}
              active={circle.active}
              number={i}
              click={this.handleClick(circle.active)}
            />
          ))}
        </div>

        <div>
          {this.state.displayModal && (
            <Modal
              score={score}
              isOpen={modal}
              onClose={() => this.resetGame}
            />
          )}
        </div>

        <div>
          <button id="start" onClick={() => this.startGame()}>
            Start Game
          </button>
          <button id="end" onClick={() => this.endGame()}>
            End Game
          </button>
        </div>
      </div>
    );
  }
}

export default App;
