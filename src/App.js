import React, { Component } from "react";
import "./index.css";
import Circle from "./components/Circle";
import Header from "./components/Header";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    circles: [1, 2, 3, 4],
    score: 0,
    counter: 0,
    pace: 1000,
    timer: null,
    modal: false,
  };

  getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  handleClick = (i) => {
    if (i === this.state.active) {
      this.setState({ score: this.state.score + 10 });
      this.newCircles(this.state.active);
      this.setState({ counter: 0 });
    } else {
      this.endGame();
    }
    counter -= 1;
    score += 10;
    scoreSpan.textContent = score;
  };

  startGame = () => {
    if (counter >= 3) {
      return endGame();
    }
    enableCircles();
    const nextActive = pickNew(active);

    circles[nextActive].classList.toggle("active");
    circles[active].classList.remove("active");

    active = nextActive;

    timer = setTimeout(startGame, pace);

    pace -= 10;
    rounds++;
    function pickNew(active) {
      const nextActive = getRandomInt(0, 3);
      if (nextActive !== active) {
        return nextActive;
      }
      return pickNew(active);
    }
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
          {this.state.circles.map((circle) => (
            <Circle
              key={circle.id}
              active={circle.active}
              Onclick={this.handleClick(circle.id)}
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
