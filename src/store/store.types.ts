import { GameState } from "../components/GameStatus/GameStatus.types";
import { Direction } from "../components/Square/Square.types";
import { type store } from "./store";

export interface StoreType {
  snake: number[];
  food: number;

  speed: number;
  nRows: number;
  nCols: number;

  direction: Direction;
  gameState: GameState;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
