import GameBoard from './components/GameBoard/GameBoard';
import Player from './components/Player/Player';
import Log from './components/Log';
import useGameUtils from './hooks/useGameUtils';
import useScore from './hooks/useScore';

function App() {
  const { move, gameBoard, playerMoveHandler, playerMoves } = useGameUtils();
  const { scoreTable } = useScore(gameBoard);
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" move={move} />
          <Player name="Player 2" symbol="O" move={move} />
        </ol>
        <GameBoard
          move={move}
          gameBoard={gameBoard}
          playerMoveHandler={playerMoveHandler}
        />
      </div>
      <Log turns={playerMoves} />
    </main>
  );
}

export default App;
