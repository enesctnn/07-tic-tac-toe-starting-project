import GameBoard from './components/GameBoard/GameBoard';
import Player from './components/Player/Player';
import Log from './components/Log';
import useGameUtils from './hooks/useGameUtils';
import useScore from './hooks/useScore';
import GameOver from './components/GameOver/GameOver';

function App() {
  const { move, gameBoard, playerMoveHandler, playerMoves, resetGame } =
    useGameUtils();
  const scoreTable = useScore(gameBoard);
  const isDraw = playerMoves.length === 9 && !scoreTable.winner;
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" move={move} />
          <Player name="Player 2" symbol="O" move={move} />
        </ol>
        {(scoreTable.winner || isDraw) && (
          <GameOver
            scoreTable={scoreTable}
            onRematch={resetGame}
            isDraw={isDraw}
          />
        )}
        <GameBoard
          move={move}
          gameBoard={gameBoard}
          playerMoveHandler={playerMoveHandler}
        />
      </div>
      <Log turns={playerMoves} scoreTable={scoreTable} />
    </main>
  );
}

export default App;
