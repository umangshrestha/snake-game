import { Meta } from "@storybook/react";
import { GameState } from "./GameStatus.types";
import { GameStatus } from "./GameStatus";

export default {
  title: "GameStatus",
  component: GameStatus,
  argTypes: {
    gameState: {
      control: {
        type: "select",
        options: [GameState.Paused, GameState.InProgress, GameState.GameOver],
      },
    },
    score: {
      control: {
        type: "number",
        min: 0,
        max: 10000,
        step: 1,
      },
    },
    onReset: {
      action: "reset",
    },
    onTogglePause: {
      action: "clicked",
    },
  },
} as Meta<typeof GameStatus>;

export const Default = {
  args: {
    gameState: GameState.InProgress,
    score: 0,
  },
};

export const Paused = {
  args: {
    gameState: GameState.Paused,
    score: 0,
  },
};

export const GameOver = {
  args: {
    gameState: GameState.GameOver,
    score: 0,
  },
};
