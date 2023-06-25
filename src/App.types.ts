import { GameStatusProps } from "./components/GameStatus/GameStatus.types";
import { Direction } from "./components/Square/Square.types";
import { StoreType } from "./store/store.types";

export type AppProps = GameStatusProps &
  StoreType & {
    moveSnake: () => void;
    changeDirection: (dir: Direction) => void;
  };
