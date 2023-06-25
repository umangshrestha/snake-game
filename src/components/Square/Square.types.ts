export enum SquareValue {
  Empty = "empty",
  SnakeBody = "snake-body",
  SnakeHead = "snake-head",
  Food = "food",
}

export type Direction = "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight";

export interface SquareProps {
  value: SquareValue;
  direction: Direction;
}
