export default function Log({ turns, scoreTable }) {
  return (
    <ol id="log">
      <li>Player X : {scoreTable.playerX}</li>
      <li>Player O : {scoreTable.playerO}</li>
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row + 1},{turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
