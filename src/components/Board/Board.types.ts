import { Direction } from "../Square/Square.types";

export interface BoardProps {
  nRows: number;
  nCols: number;
  snake: number[];
  food: number;
  direction: Direction;
}
