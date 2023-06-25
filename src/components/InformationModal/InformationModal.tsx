import { FC } from "react";
import styles from "./InformationModal.module.css";

export const InformationModal: FC = () => (
  <>
    <a type="button" className={styles.infoBtn} href="#popup">
      {" "}
      INFO
    </a>
    <label id="popup" className={styles.overlay}>
      <div className={styles.popup}>
        <h2>Snake Game</h2>
        <p>
          Move the snake with the <strong>arrow keys</strong>. Eat the food to
          grow.
        </p>
        <p>
          Press <strong>spacebar</strong> to pause.
        </p>
        <p>
          Press the <strong>reset</strong> button to reset the game.
        </p>
        <a className={styles.close} href="#">
          &times;
        </a>
      </div>
    </label>
  </>
);
