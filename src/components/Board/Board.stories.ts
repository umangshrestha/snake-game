import { Meta } from "@storybook/react";
import { Board } from "./Board";

export default {
  title: "Board",
  component: Board,
  argTypes: {
    nRows: {
      control: {
        type: "number",
        min: 1,
        max: 100,
        step: 1,
      },
    },
    nCols: {
      control: {
        type: "number",
        min: 1,
        max: 100,
        step: 1,
      },
    },
    snake: {
      control: {
        type: "array",
        min: 0,
        max: 10000,
        step: 1,
      },
    },
    food: {
      control: {
        type: "number",
        min: 0,
        max: 10000,
        step: 1,
      },
    },
  },
} as Meta<typeof Board>;

export const defaultBoard = {
  args: {
    nRows: 10,
    nCols: 10,
    snake: [0, 1, 2, 3, 4],
    food: 5,
  },
};
