import { createSlice } from "@reduxjs/toolkit";
import { GameState } from "../components/GameStatus/GameStatus.types";
import { StoreType } from "./store.types";
import {
  getRandomPos,
  isSnakeCollision,
  isValidDirectionChange,
  moveSnake,
} from "./store.util";
import { DEFAULT_N_COLS, DEFAULT_N_ROWS } from "./store.config";
import { Direction } from "../components/Square/Square.types";

const SnakeSlice = createSlice({
  name: "snake",
  initialState: {
    speed: 200,
    nRows: DEFAULT_N_ROWS,
    nCols: DEFAULT_N_COLS,
    snake: [Math.floor((DEFAULT_N_ROWS * DEFAULT_N_COLS) / 2)],
    food: getRandomPos(DEFAULT_N_ROWS, DEFAULT_N_COLS),
    direction: "ArrowUp",
    gameState: GameState.InProgress,
  } as StoreType,

  reducers: {
    setDirection: (state, action) => {
      const direction = action.payload as Direction;
      if (!isValidDirectionChange(state.direction, direction)) return;

      state.direction = direction;
    },
    resetGame: (state) => {
      state.snake = [Math.floor((state.nRows * state.nCols) / 2)];
      state.food = getRandomPos(state.nRows, state.nCols);
      state.direction = "ArrowUp";
      state.gameState = GameState.InProgress;
    },
    updateBoard: (state: StoreType) => {
      if (state.gameState !== GameState.InProgress) return;

      const snake = moveSnake(
        state.snake,
        state.nRows,
        state.nCols,
        state.direction
      );

      if (snake[0] === state.food) {
        state.snake = snake;
        state.food = getRandomPos(state.nRows, state.nCols);
        state.speed *= 0.9;
      } else {
        state.snake.pop();
      }

      if (isSnakeCollision(snake)) state.gameState = GameState.GameOver;
    },
    togglePause: (state) => {
      if (state.gameState === GameState.InProgress)
        state.gameState = GameState.Paused;
      else if (state.gameState === GameState.Paused)
        state.gameState = GameState.InProgress;
    },
  },
});

export const { setDirection, togglePause, resetGame, updateBoard } =
  SnakeSlice.actions;

export default SnakeSlice.reducer;
