import { CSSProperties, FC } from "react";
import { Square } from "../Square/Square";
import { BoardProps } from "./Board.types";
import { SquareValue } from "../Square/Square.types";
import styles from "./Board.module.css";

export const Board: FC<BoardProps> = ({
  nRows,
  nCols,
  food,
  snake,
  direction,
}) => {
  const boardStyle = {
    "--n-rows": nRows,
    "--n-cols": nCols,
  } as CSSProperties;

  const getSnakeValue = (i: number) => {
    if (snake[0] === i) return SquareValue.SnakeHead;
    if (snake.includes(i)) return SquareValue.SnakeBody;

    if (i === food) return SquareValue.Food;
    return SquareValue.Empty;
  };

  return (
    <div className={styles.board} style={boardStyle}>
      {Array(nRows * nCols)
        .fill(null)
        .map((_, i) => (
          <Square key={i} value={getSnakeValue(i)} direction={direction} />
        ))}
    </div>
  );
};
