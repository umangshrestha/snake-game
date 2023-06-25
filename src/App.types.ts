import { BoardProps } from "./components/Board/Board.types";
import { GameStatusProps } from "./components/GameStatus/GameStatus.types";
import { Direction, StoreType } from "./store/store.types";

export type AppProps = BoardProps &
  GameStatusProps &
  StoreType & {
    moveSnake: () => void;
    changeDirection: (dir: Direction) => void;
  };
