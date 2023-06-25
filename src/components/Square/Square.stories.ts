import { Meta } from "@storybook/react";
import { Square } from "./Square";

export default {
  title: "Square",
  component: Square,
  argTypes: {
    value: {
      control: {
        type: "select",
        options: ["empty", "snake", "food"],
      },
      direction: {
        control: {
          type: "select",
          options: ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        },
      },
    },
  },
} as Meta<typeof Square>;

export const Empty = {
  args: {
    value: "empty",
  },
};

export const Snake = {
  args: {
    value: "snake-body",
  },
};

export const Food = {
  args: {
    value: "food",
  },
};

export const SnakeHead = {
  args: {
    value: "snake-head",
    direction: "ArrowUp",
  },
};
