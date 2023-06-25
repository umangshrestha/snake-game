export enum GameState {
  Paused = "paused",
  GameOver = "game over",
  InProgress = "in progress",
}

export interface GameStatusProps {
  gameState: GameState;
  score: number;
  onReset: () => void;
  onTogglePause: () => void;
}
