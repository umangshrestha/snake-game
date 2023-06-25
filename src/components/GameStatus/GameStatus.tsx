import { FC } from "react";
import { GameState, GameStatusProps } from "./GameStatus.types";
import styles from "./GameStatus.module.css";
import { InformationModal } from "../InformationModal/InformationModal";

export const GameStatus: FC<GameStatusProps> = ({
  gameState,
  score,
  onReset,
  onTogglePause,
}) => {
  return (
    <section className={styles.gameStatus}>
      <input type="text" value={gameState} disabled />

      <input type="number" value={score} disabled />

      <div className={styles.wrapper}>
        <button type="reset" onClick={onReset}>
          Reset
        </button>
        <button
          type="button"
          onClick={onTogglePause}
          disabled={gameState === GameState.GameOver}
        >
          {gameState === GameState.Paused ? "Resume" : "Pause"}
        </button>
        <InformationModal />
      </div>
    </section>
  );
};
