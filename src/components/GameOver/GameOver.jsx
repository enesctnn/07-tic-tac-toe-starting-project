import styles from './GameOver.module.css';

export default function GameOver({ scoreTable, onRematch }) {
  const message = !scoreTable.winner ? (
    <p>It's Draw!</p>
  ) : (
    <p>{scoreTable.winner} You won!</p>
  );

  return (
    <div id={styles['game-over']}>
      <h2>Game Over!</h2>
      {message}
      <p>
        <button onClick={onRematch}>Rematch!</button>
      </p>
    </div>
  );
}
