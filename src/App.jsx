import GameBoard from './components/GameBoard/GameBoard';
import Player from './components/Player/Player';
import Log from './components/Log';
import useGameUtils from './hooks/useGameUtils';
import useScore from './hooks/useScore';
import GameOver from './components/GameOver/GameOver';
import { useEffect, useState } from 'react';

const scoreTable = {
  playerX: 0,
  playerO: 0,
  draws: 0,
};

function App() {
  const { move, gameBoard, playerMoveHandler, playerMoves, resetGame } =
    useGameUtils();
  const winner = useScore(gameBoard);
  const isDraw = playerMoves.length === 9 && !winner;
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });

  const playerWon = winner === 'X' ? players.X : players.O;

  useEffect(() => {
    if (winner) {
      winner === 'X' ? scoreTable.playerX++ : scoreTable.playerO++;
    }
    if (isDraw) {
      scoreTable.draws++;
    }
  }, [winner, isDraw]);

  const playerNameChangeHandler = (symbol, playerName) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: playerName,
      };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            move={move}
            onNameChange={playerNameChangeHandler}
          />
          <Player
            name="Player 2"
            symbol="O"
            move={move}
            onNameChange={playerNameChangeHandler}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver
            onRematch={resetGame}
            isDraw={isDraw}
            winner={winner}
            playerWon={playerWon.toUpperCase()}
          />
        )}
        <GameBoard
          move={move}
          gameBoard={gameBoard}
          playerMoveHandler={playerMoveHandler}
        />
      </div>
      <Log turns={playerMoves} players={players} scoreTable={scoreTable} />
    </main>
  );
}

export default App;
