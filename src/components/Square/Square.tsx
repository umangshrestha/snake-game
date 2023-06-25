import { FC } from "react";
import { SquareProps, SquareValue } from "./Square.types";
import styles from "./Square.module.css";

export const Square: FC<SquareProps> = ({ value, direction }) => (
  <div
    className={styles.square}
    data-value={value === SquareValue.SnakeHead ? direction : value}
  />
);
