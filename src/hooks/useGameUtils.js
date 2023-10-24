import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const useGameUtils = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [move, setMove] = useState('X');
  const [playerMoves, setPlayerMoves] = useState([]);

  const resetGame = () => {
    setGameBoard(initialGameBoard);
    setMove('X');
    setPlayerMoves([]);
  };

  const playerMoveHandler = (rowIndex, colIndex, move) => {
    setGameBoard((prevGameBoard) => {
      if (prevGameBoard[rowIndex][colIndex] === null) {
        const updatedBoard = [
          ...prevGameBoard.map((innerArray) => [...innerArray]),
        ];
        updatedBoard[rowIndex][colIndex] = move;
        setPlayerMoves((prevState) => {
          return [
            ...prevState,
            {
              player: move,
              square: {
                row: rowIndex,
                col: colIndex,
              },
            },
          ];
        });
        move === 'X' ? setMove('O') : setMove('X');
        return updatedBoard;
      }
      return prevGameBoard;
    });
  };

  return { playerMoveHandler, gameBoard, move, playerMoves, resetGame };
};

export default useGameUtils;
