import { WINNING_COMBINATIONS } from '../winning-combinations';

const useScore = (gameBoard) => {
  const scoreTable = {
    playerX: 0,
    playerO: 0,
    winner: '',
  };
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      firstSquareSymbol === 'X' ? scoreTable.playerX++ : scoreTable.playerO++;
      scoreTable.winner = firstSquareSymbol;
    }
  }
  return scoreTable;
};

export default useScore;
