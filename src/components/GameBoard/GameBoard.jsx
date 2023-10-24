import styles from './GameBoard.module.css';

const GameBoard = ({ move, playerMoveHandler, gameBoard }) => {
  return (
    <ol id={styles['game-board']}>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => playerMoveHandler(rowIndex, colIndex, move)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
