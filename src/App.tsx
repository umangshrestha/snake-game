import "./styles/App.css";
import {
  resetGame,
  setDirection,
  togglePause,
  updateBoard,
} from "./store/store.slice";
import { AppDispatch, RootState } from "./store/store.types";
import { GameStatus } from "./components/GameStatus/GameStatus";
import { connect } from "react-redux";
import { Board } from "./components/Board/Board";
import { useEffect } from "react";
import { AppProps } from "./App.types";
import { Direction } from "./components/Square/Square.types";

const App = ({
  speed,
  score,
  moveSnake,
  onReset,
  onTogglePause,
  changeDirection,
  ...boardProps
}: AppProps) => {
  useEffect(() => {
    document.title = "Snake Game";
  }, []);

  useEffect(() => {
    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [speed, moveSnake]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
          changeDirection(e.key as Direction);
          break;
        case " ": // Space
          onTogglePause();
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [changeDirection, onTogglePause]);

  return (
    <>
      <header>
        <h1>Snake Game</h1>
      </header>
      <main>
        <GameStatus
          score={score}
          gameState={boardProps.gameState}
          onReset={onReset}
          onTogglePause={onTogglePause}
        />
        <Board {...boardProps} />
      </main>
      <footer>
        <p>
          &copy; 2021, Created by
          <a href="https://github.com/umangshrestha">Umang Shrestha</a>
        </p>
      </footer>
    </>
  );
};

const mapStateToProps = ({ snake: state }: RootState) => ({
  ...state,
  score: state.snake.length - 1,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  moveSnake: () => dispatch(updateBoard()),
  onTogglePause: () => dispatch(togglePause()),
  onReset: () => dispatch(resetGame()),
  changeDirection: (direction: Direction) => dispatch(setDirection(direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
